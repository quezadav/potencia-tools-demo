(() => {
  const DEMO_MODE=new URLSearchParams(window.location.search).get('demo')==='1';

  function parseRangeId(id){
    const m=/^(focus|axo)_(\d+)_(\d+)$/.exec(id||'');
    return m?{key:m[1],di:+m[2],qi:+m[3]}:null;
  }

  function choiceGroup(input){
    return document.getElementById(input.id+'Choices');
  }

  function syncChoiceUI(input){
    if(!input)return;
    const meta=parseRangeId(input.id);
    if(!meta)return;
    const touched=STATE[meta.key].touched.has(`${meta.di}:${meta.qi}`);
    const selected=Math.round(+input.value);
    const group=choiceGroup(input);
    if(group){
      const buttons=[...group.querySelectorAll('.score-choice')];
      buttons.forEach((button,index)=>{
        const active=touched&&+button.dataset.value===selected;
        button.classList.toggle('is-selected',active);
        button.setAttribute('aria-checked',String(active));
        button.tabIndex=active?0:(!touched&&index===0?0:-1);
      });
    }
    input.setAttribute('aria-valuetext',touched?`${selected} de 5`:'Sin responder');
    const score=document.getElementById(input.id+'s');
    if(score){
      score.textContent=touched?'':'Sin responder';
      score.classList.toggle('unanswered',!touched);
      if(touched)score.setAttribute('aria-hidden','true');
      else score.removeAttribute('aria-hidden');
    }
    const q=input.closest('.q');
    if(q&&touched)q.classList.remove('missing-answer');
  }

  function chooseScore(input,meta,value,focus=false){
    input.value=String(value);
    syncScore(meta.key,meta.di,meta.qi);
    if(focus){
      const button=choiceGroup(input)?.querySelector(`[data-value="${value}"]`);
      button?.focus();
    }
  }

  function handleChoiceKeys(event,input,meta){
    const current=+event.currentTarget.dataset.value;
    let next=null;
    if(event.key==='ArrowRight'||event.key==='ArrowUp')next=Math.min(5,current+1);
    if(event.key==='ArrowLeft'||event.key==='ArrowDown')next=Math.max(1,current-1);
    if(event.key==='Home')next=1;
    if(event.key==='End')next=5;
    if(next===null)return;
    event.preventDefault();
    chooseScore(input,meta,next,true);
  }

  function enhanceRange(input){
    const meta=parseRangeId(input.id);
    if(!meta||input.dataset.p2Choice==='1')return;
    input.dataset.p2Choice='1';
    input.classList.add('p2-range-source');
    input.tabIndex=-1;
    input.setAttribute('aria-hidden','true');
    input.setAttribute('aria-valuetext','Sin responder');

    const group=document.createElement('div');
    group.id=input.id+'Choices';
    group.className='score-choices';
    group.setAttribute('role','radiogroup');
    group.setAttribute('aria-labelledby',input.id+'label');

    for(let value=1;value<=5;value++){
      const button=document.createElement('button');
      button.type='button';
      button.className='score-choice';
      button.dataset.value=String(value);
      button.setAttribute('role','radio');
      button.setAttribute('aria-checked','false');
      button.setAttribute('aria-label',`${value} de 5`);
      button.textContent=String(value);
      button.addEventListener('click',()=>chooseScore(input,meta,value));
      button.addEventListener('keydown',event=>handleChoiceKeys(event,input,meta));
      group.appendChild(button);
    }

    input.insertAdjacentElement('afterend',group);
    syncChoiceUI(input);
  }

  function enhanceRanges(key){
    document.querySelectorAll(`#${key}Form input[type="range"]`).forEach(enhanceRange);
  }

  function polishFormCopy(key){
    const form=document.getElementById(key+'Form');
    if(!form)return;

    const contextNote=form.querySelector('.context .lead');
    if(contextNote){
      contextNote.textContent='Tu frase de contexto se usa como ancla visible para tu reflexión. Sólo se conservará en este dispositivo si eliges guardarla junto con tu microacción.';
    }

    form.querySelectorAll('button.ghost').forEach(button=>{
      if(button.textContent.trim()==='Probar ejemplo'){
        if(DEMO_MODE){
          button.title='Herramienta de demostración';
        }else{
          button.remove();
        }
      }
    });
  }

  function polishResultCopy(key){
    const res=document.getElementById(key+'Res');
    if(!res||res.classList.contains('empty'))return;

    res.querySelectorAll('h4').forEach(h=>{
      const text=h.textContent.trim();
      if(key==='axo'&&text==='Pregunta detonadora')h.textContent='Reencuadre';
      if(text==='Pista de Brújula entre marcos')h.textContent='Conexión posible';
    });

    res.querySelectorAll('.note').forEach(note=>{
      if(note.textContent.trim().startsWith('Esta conexión es una interpretación de diseño de Brújula PotencIA')){
        note.textContent='Brújula propone esta conexión como una pista para explorar ambos marcos. No forma parte de la estructura original de los libros.';
      }
    });
  }

  function syncQuestionLayout(key){
    const app=document.getElementById(key);
    const res=document.getElementById(key+'Res');
    if(!app||!res)return;
    app.classList.toggle('question-mode',res.classList.contains('empty'));
  }

  function observeResultLayout(key){
    const res=document.getElementById(key+'Res');
    if(!res)return;
    syncQuestionLayout(key);
    const observer=new MutationObserver(()=>syncQuestionLayout(key));
    observer.observe(res,{attributes:true,attributeFilter:['class']});
  }

  function polishFeedback(){
    const card=document.getElementById('feedbackCard');
    const form=document.getElementById('feedbackForm');
    const toggle=document.getElementById('feedbackToggle');
    const ratingLabel=document.querySelector('label[for="feedbackRating"]');
    if(!card||!form||!toggle||!ratingLabel)return false;

    ratingLabel.textContent='¿Qué tan útil fue? · 1 = nada útil · 5 = muy útil';

    if(!toggle.dataset.p2Toggle){
      toggle.dataset.p2Toggle='1';
      const syncToggle=()=>{
        toggle.textContent=form.hidden?'Dar feedback':'Cerrar';
        toggle.setAttribute('aria-expanded',String(!form.hidden));
      };
      toggle.addEventListener('click',()=>window.setTimeout(syncToggle,0));
      syncToggle();
    }
    return true;
  }

  const baseSyncScore=syncScore;
  syncScore=function(key,di,qi){
    baseSyncScore(key,di,qi);
    syncChoiceUI(document.getElementById(`${key}_${di}_${qi}`));
  };

  const baseRenderForm=renderForm;
  renderForm=function(key){
    baseRenderForm(key);
    enhanceRanges(key);
    polishFormCopy(key);
  };

  const baseRenderResult=renderResult;
  renderResult=function(key,i){
    baseRenderResult(key,i);
    polishResultCopy(key);
  };

  const baseSetStatus=setStatus;
  setStatus=function(i,status,reopen=false){
    const reopenKey=reopen?getSessions()[i]?.key:null;
    const result=baseSetStatus(i,status,reopen);
    if(reopen){
      window.setTimeout(()=>{
        const app=reopenKey?document.getElementById(reopenKey):null;
        app?.scrollIntoView({behavior:'smooth',block:'start'});
      },120);
      return result;
    }

    const messages={
      hecha:'Listo. Quedó registrada como realizada.',
      parcial:'Listo. Quedó registrada como parcialmente realizada.',
      no_hecha:'Listo. Quedó registrada como no realizada.'
    };
    const message=messages[status];
    const card=document.getElementById('followCard');
    if(message&&card){
      card.classList.add('on','follow-confirmed');
      card.innerHTML=`<div class="follow-confirmation"><div class="k">Seguimiento actualizado</div><h3>${message}</h3><p>Tu recorrido queda guardado en este dispositivo.</p><div class="row"><button type="button" class="clearbtn" onclick="renderFollow()">Continuar</button></div></div>`;
    }
    return result;
  };
  window.setStatus=setStatus;

  goHome=function(){
    const active=[...document.querySelectorAll('.app.on')].find(x=>x.id==='focus'||x.id==='axo');
    const resetKey=active&&STATE[active.id]?.saved?active.id:null;
    document.querySelectorAll('.app').forEach(x=>x.classList.remove('on'));
    const home=document.getElementById('home');
    if(home)home.style.display='block';
    renderFollow();
    if(resetKey)resetRoute(resetKey);
    const follow=document.getElementById('followCard');
    const target=follow?.classList.contains('on')?follow:home;
    target?.scrollIntoView({behavior:'smooth',block:'start'});
  };
  window.goHome=goHome;

  const baseAnalyze=analyze;
  analyze=function(key){
    document.querySelectorAll(`#${key}Form .q.missing-answer`).forEach(x=>x.classList.remove('missing-answer'));

    if(!allAnswered(key)){
      const left=requiredCount(key)-STATE[key].touched.size;
      const msg=document.getElementById(key+'FormMsg');
      msg.textContent=`Faltan ${left} ${left===1?'respuesta':'respuestas'}. Te llevo a la primera pendiente.`;

      let first=null;
      outer:
      for(let di=0;di<ROUTES[key].dimensions.length;di++){
        for(let qi=0;qi<ROUTES[key].dimensions[di].questions.length;qi++){
          if(!STATE[key].touched.has(`${di}:${qi}`)){
            first=document.getElementById(`${key}_${di}_${qi}`);
            break outer;
          }
        }
      }

      if(first){
        const q=first.closest('.q');
        const firstChoice=choiceGroup(first)?.querySelector('.score-choice');
        if(q){
          q.classList.add('missing-answer');
          q.scrollIntoView({behavior:'smooth',block:'center'});
        }
        window.setTimeout(()=>firstChoice?.focus({preventScroll:true}),320);
      }
      return;
    }

    baseAnalyze(key);
    window.setTimeout(()=>{
      const res=document.getElementById(key+'Res');
      if(res&&!res.classList.contains('empty')){
        res.scrollIntoView({behavior:'smooth',block:'start'});
      }
    },80);
  };

  enhanceRanges('focus');
  enhanceRanges('axo');
  polishFormCopy('focus');
  polishFormCopy('axo');
  observeResultLayout('focus');
  observeResultLayout('axo');

  const feedbackCard=document.getElementById('feedbackCard');
  if(feedbackCard){
    const observer=new MutationObserver((_mutations,obs)=>{
      if(polishFeedback())obs.disconnect();
    });
    observer.observe(feedbackCard,{childList:true,subtree:true});
    polishFeedback();
  }
})();
