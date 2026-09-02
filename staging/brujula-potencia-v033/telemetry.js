(() => {
  'use strict';

  const API_BASE = 'https://brujula-potencia-api.quezadav.workers.dev';
  const VERSION = '0.3.3';
  const SESSION_KEY = 'brujula_v033_session_id';
  const FEEDBACK_SESSION_ID_ENABLED = true;

  const getSessionId = () => {
    try {
      let id = sessionStorage.getItem(SESSION_KEY);
      if (!id) {
        id = crypto.randomUUID();
        sessionStorage.setItem(SESSION_KEY, id);
      }
      return id;
    } catch (_e) {
      return crypto.randomUUID();
    }
  };

  const SESSION_ID = getSessionId();
  let currentRoute = null;
  const routeStartedAt = new Map();

  const deviceClass = () => {
    const w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1100) return 'tablet';
    return 'desktop';
  };

  const viewportBucket = () => {
    const w = window.innerWidth;
    if (w < 640) return 'small';
    if (w < 1024) return 'medium';
    return 'large';
  };

  const durationBucket = (ms) => {
    const min = ms / 60000;
    if (min < 1) return '<1m';
    if (min < 3) return '1-3m';
    if (min < 5) return '3-5m';
    if (min < 10) return '5-10m';
    return '>10m';
  };

  const postJson = async (path, payload) => {
    try {
      return await fetch(API_BASE + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      });
    } catch (_e) {
      return null;
    }
  };

  const sendEvent = (event, route = null, duration = null) => {
    const payload = {
      session_id: SESSION_ID,
      version: VERSION,
      event,
      device_class: deviceClass(),
      viewport_bucket: viewportBucket(),
      language: 'es'
    };
    if (route) payload.route = route;
    if (duration) payload.duration_bucket = duration;
    void postJson('/v1/events', payload);
  };

  const originalOpenRoute = window.openRoute;
  if (typeof originalOpenRoute === 'function') {
    window.openRoute = function (key) {
      currentRoute = key;
      routeStartedAt.set(key, Date.now());
      sendEvent('route_open', key);
      return originalOpenRoute(key);
    };
  }

  const originalAnalyze = window.analyze;
  if (typeof originalAnalyze === 'function') {
    window.analyze = function (key) {
      currentRoute = key;
      if (typeof window.allAnswered === 'function' && !window.allAnswered(key)) {
        sendEvent('validation_error', key);
        return originalAnalyze(key);
      }

      if (!routeStartedAt.has(key)) routeStartedAt.set(key, Date.now());
      sendEvent('reflection_started', key);
      const result = originalAnalyze(key);

      try {
        if (STATE[key] && STATE[key].analysisValid) {
          const started = routeStartedAt.get(key) || Date.now();
          sendEvent('reflection_completed', key, durationBucket(Date.now() - started));
        }
      } catch (_e) {}

      return result;
    };
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a.link');
    if (!link) return;
    const section = link.closest('.app');
    const route = section && ['focus', 'axo'].includes(section.id) ? section.id : currentRoute;
    sendEvent('book_link_clicked', route || null);
  });

  const card = document.getElementById('feedbackCard');
  if (card) {
    card.innerHTML = `
      <div class="historytop">
        <h3 id="feedbackTitle">Ayúdanos a mejorar Brújula</h3>
        <button type="button" class="clearbtn" id="feedbackToggle">Dar feedback</button>
      </div>
      <div id="feedbackForm" hidden>
        <p class="note" style="margin-top:0">Tu feedback es voluntario. No incluyas información sensible en el comentario.</p>
        <label for="feedbackRoute" style="display:block;margin:12px 0 6px">Ruta</label>
        <select id="feedbackRoute" style="width:100%;max-width:360px">
          <option value="focus">Necesito dirección · F.O.C.U.S.</option>
          <option value="axo">Necesito regenerarme · AJOLOTE</option>
        </select>
        <label for="feedbackRating" style="display:block;margin:12px 0 6px">¿Qué tan útil fue? · 1 a 5</label>
        <select id="feedbackRating" style="width:100%;max-width:180px">
          <option value="">Selecciona</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="feedbackComment" style="display:block;margin:12px 0 6px">Comentario opcional</label>
        <textarea id="feedbackComment" maxlength="500" rows="4" style="width:100%" placeholder="¿Qué funcionó bien o qué mejorarías?"></textarea>
        <div class="row">
          <button type="button" class="btn" id="feedbackSubmit">Enviar feedback</button>
        </div>
        <div id="feedbackMsg" class="note" aria-live="polite"></div>
      </div>`;

    const toggle = document.getElementById('feedbackToggle');
    const form = document.getElementById('feedbackForm');
    const routeSelect = document.getElementById('feedbackRoute');
    const ratingSelect = document.getElementById('feedbackRating');
    const commentInput = document.getElementById('feedbackComment');
    const submit = document.getElementById('feedbackSubmit');
    const msg = document.getElementById('feedbackMsg');

    toggle.addEventListener('click', () => {
      const opening = form.hidden;
      form.hidden = !form.hidden;
      if (opening) {
        if (currentRoute) routeSelect.value = currentRoute;
        sendEvent('feedback_opened', currentRoute || null);
      }
    });

    submit.addEventListener('click', async () => {
      msg.textContent = '';
      const route = routeSelect.value;
      const rating = Number(ratingSelect.value);
      const comment = commentInput.value.trim();

      if (!['focus', 'axo'].includes(route) || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        msg.textContent = 'Selecciona una ruta y una calificación de 1 a 5.';
        return;
      }

      const payload = {
        version: VERSION,
        route,
        rating,
        comment: comment || null,
        source: 'brujula-web'
      };
      if (FEEDBACK_SESSION_ID_ENABLED) payload.session_id = SESSION_ID;

      submit.disabled = true;
      const response = await postJson('/v1/feedback', payload);
      submit.disabled = false;

      if (!response) {
        msg.textContent = 'No fue posible enviar el feedback. Inténtalo más tarde.';
        return;
      }
      if (response.status === 429) {
        msg.textContent = 'Has enviado varias respuestas seguidas. Inténtalo de nuevo más tarde.';
        return;
      }
      if (!response.ok) {
        msg.textContent = 'No fue posible guardar el feedback.';
        return;
      }

      currentRoute = route;
      sendEvent('feedback_submitted', route);
      msg.textContent = 'Gracias. Tu feedback fue enviado.';
      ratingSelect.value = '';
      commentInput.value = '';
    });
  }

  sendEvent('session_start');
})();
