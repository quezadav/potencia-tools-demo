const ROUTES={
  focus:{
    framework:'F.O.C.U.S.',badge:'bf',button:'Ver mi brújula',scale:['Atender','Sólido'],resultLabel:'Tu brújula de hoy',
    ideal:{
      area:'Equilibrio F.O.C.U.S.',
      label:'Equilibrio percibido',
      title:'Tus cinco dimensiones se sienten sólidas hoy',
      observe:'Tu autoobservación no señala una dimensión que necesite prioridad inmediata. Esto no significa perfección ni que el equilibrio vaya a mantenerse igual; refleja cómo percibes tu momento actual.',
      reframe:'Cuando no aparece un foco urgente, F.O.C.U.S. puede servir para reconocer qué está sosteniendo tu equilibrio y cuidar ese rumbo con intención.',
      actions:[
        'Identificar una decisión, hábito o vínculo que hoy esté ayudando a sostener mi equilibrio y elegir conscientemente mantenerlo esta semana.',
        'Reconocer algo valioso que ya está presente en mi vida y darle espacio sin convertirlo en una nueva exigencia.',
        'Elegir una de las cinco dimensiones y realizar una acción pequeña para cuidarla, no porque esté mal, sino porque quiero sostenerla.'
      ],
      deepen:'La Mano F.O.C.U.S. y Sostener el propósito'
    },
    dimensions:[
      {code:'F',name:'Felicidad',questions:[
        '¿Estoy reconociendo y disfrutando algo valioso que ya está presente, aun cuando no todo esté resuelto?',
        '¿Mis decisiones recientes me acercan a un bienestar genuino y no sólo a cumplir, producir o llegar a una meta?'
      ],observe:'Tal vez hoy conviene revisar si la plenitud quedó pospuesta hasta que todo encaje o termine.',reframe:'En F.O.C.U.S., la felicidad se relaciona con reconocer lo que sostiene, agradecer lo que ya está y permitirte disfrutar el proceso sin exigir perfección.',actions:[
        'Reservar 20 minutos para algo que disfrute sin convertirlo en una tarea productiva.',
        'Anotar una cosa que ya está bien o presente en mi vida y agradecerla de manera concreta.',
        'Identificar una decisión pequeña que me acerque esta semana a un bienestar más genuino.'
      ],deepen:'F — Felicidad',connection:'Si notas que el bienestar se posterga porque sostienes demasiado, Brújula sugiere explorar también Límites en AJOLOTE.'},
      {code:'O',name:'Oportunidad',questions:[
        '¿Puedo mirar un cambio, cierre u obstáculo sin dejar que el miedo defina por completo lo que significa?',
        '¿Estoy identificando alguna posibilidad concreta que podría abrirse si cambio la mirada o pruebo un nuevo comienzo?'
      ],observe:'Puede que una dificultad esté ocupando tanto espacio que todavía no alcances a ver qué puerta, aprendizaje o dirección nueva podría abrirse.',reframe:'En F.O.C.U.S., Oportunidad no niega la caída ni el cambio: propone reinterpretarlos con conciencia para convertirlos en impulso o nuevo comienzo.',actions:[
        'Escribir un obstáculo actual y, al lado, una posibilidad que podría aparecer si lo miro desde otro ángulo.',
        'Elegir una acción de menos de 30 minutos que abra una alternativa concreta esta semana.',
        'Preguntar a una persona de confianza qué oportunidad ve en una situación que yo estoy leyendo sólo como problema.'
      ],deepen:'O — Oportunidad',connection:'Si el cambio se siente impuesto y amenaza tu coherencia, Brújula sugiere explorar también Transformación en AJOLOTE.'},
      {code:'C',name:'Convicción',questions:[
        '¿Tengo claro qué propósito, valor o dirección quiero sostener aunque exista incertidumbre?',
        '¿Puedo seguir avanzando con una acción coherente aunque tenga dudas, miedo o los resultados estén tardando?'
      ],observe:'Tal vez sabes qué te importa, pero el miedo, la duda o la demora de resultados están debilitando tu disposición a sostenerlo.',reframe:'En F.O.C.U.S., Convicción no significa ausencia de duda ni rigidez: significa mantener dirección y propósito aun cuando no hay certeza total.',actions:[
        'Nombrar en una frase qué vale la pena seguir sosteniendo aun con incertidumbre.',
        'Dar hoy un paso pequeño que sea coherente con mi propósito, sin esperar sentir certeza completa.',
        'Distinguir por escrito entre convicción y obstinación: qué quiero sostener y qué sí estoy dispuesto a revisar.'
      ],deepen:'C — Convicción',connection:'Si la duda viene de no saber qué parte de ti quieres preservar, Brújula sugiere explorar Autenticidad o Esencia en AJOLOTE.'},
      {code:'U',name:'Unidad',questions:[
        '¿Estoy cuidando vínculos auténticos donde existe apoyo, empatía y colaboración?',
        '¿Me permito pedir, aceptar u ofrecer apoyo sin sentir que debo cargar con todo en soledad?'
      ],observe:'Puede ser útil revisar si estás intentando sostener demasiado sin apoyo o si alguna relación importante necesita más presencia, reciprocidad o claridad.',reframe:'En F.O.C.U.S., Unidad reconoce que pedir apoyo, pertenecer y colaborar no reducen tu autonomía; pueden ayudarte a sostener el camino con más humanidad y esperanza.',actions:[
        'Pedir apoyo concreto en una tarea o situación donde no necesito cargar solo(a).',
        'Agradecer de manera directa a una persona cuyo apoyo haya sido importante para mí.',
        'Cuidar intencionalmente un vínculo que hoy me aporta confianza, pertenencia o colaboración.'
      ],deepen:'U — Unidad',connection:'Si el reto no es conectar sino proteger tiempo, energía o responsabilidades, Brújula sugiere explorar Límites en AJOLOTE.'},
      {code:'S',name:'Sentido',questions:[
        '¿Lo que hago hoy se conecta con un para qué que va más allá del logro inmediato?',
        '¿Puedo reconocer a quién, qué causa o qué legado quiero aportar con mi tiempo, experiencia o trabajo?'
      ],observe:'Tal vez estás haciendo muchas cosas, pero cuesta reconocer qué las conecta con un propósito, una contribución o una huella que trascienda el resultado inmediato.',reframe:'En F.O.C.U.S., Sentido relaciona propósito con servicio, legado y trascendencia: no sólo qué logras, sino para qué y para quién vale la pena hacerlo.',actions:[
        'Completar: “Quiero que lo que hago esta semana contribuya a…”.',
        'Elegir una acción concreta que beneficie a una persona, comunidad, proyecto o causa que realmente me importe.',
        'Revisar una tarea importante y escribir qué propósito más amplio quiero que exprese.'
      ],deepen:'S — Sentido',connection:'Si necesitas distinguir qué debe permanecer aunque cambie tu propósito o tu contexto, Brújula sugiere explorar Esencia en AJOLOTE.'}
    ]
  },
  axo:{
    framework:'AJOLOTE',badge:'ba',button:'Ver mi reflexión',scale:['Explorar','Alineado'],resultLabel:'Área para explorar',
    ideal:{
      area:'Coherencia AJOLOTE',
      label:'Coherencia percibida',
      title:'Hoy no aparece un desajuste prioritario',
      observe:'Tus respuestas reflejan una percepción alta de coherencia entre los siete principios en este momento. No significa perfección, ausencia de conflicto ni una evaluación clínica.',
      reframe:'Cuando no aparece un desajuste urgente, el marco AJOLOTE puede usarse para reconocer qué condiciones, decisiones y límites están ayudando a adaptarte sin fragmentarte.',
      actions:[
        'Identificar una condición de mi entorno, límite o hábito que hoy favorece mi coherencia y elegir protegerla esta semana.',
        'Nombrar un valor o principio que quiero preservar aunque mis circunstancias cambien.',
        'Revisar un cambio reciente y reconocer qué hizo que se sintiera elegido y no impuesto.'
      ],
      deepen:'Capítulo 11 — Habitar lo que eres'
    },
    dimensions:[
      {code:'A',name:'Autenticidad',questions:[
        '¿Lo que pienso, siento y hago se siente suficientemente coherente en este momento?',
        '¿Estoy adaptándome por elección más que borrando, ocultando o suavizando partes importantes de mí para encajar?'
      ],observe:'Quizá estás adaptándote tanto a una situación que se vuelve difícil reconocer qué parte de tus decisiones sigue sintiéndose realmente tuya.',reframe:'El marco AJOLOTE plantea la autenticidad como coherencia interna: no es negarte al cambio, sino cambiar sin traicionarte ni fragmentarte.',actions:[
        'Nombrar por escrito una contradicción entre lo que pienso, siento y hago, sin intentar resolverla todavía.',
        'Identificar una decisión pequeña donde pueda actuar con un poco más de coherencia conmigo.',
        'Antes de una decisión, preguntarme: “¿Esto lo elijo o sólo me adapto para encajar?”.'
      ],deepen:'A — Autenticidad',connection:'Si quieres convertir esa claridad interna en una dirección que puedas sostener, Brújula sugiere explorar Convicción en F.O.C.U.S.'},
      {code:'J',name:'Justicia con tu historia',questions:[
        '¿Puedo mirar mi pasado con verdad y proporción, sin negarlo, idealizarlo ni dejar que defina todo mi presente?',
        '¿Distingo qué sí fue responsabilidad mía, qué no lo fue y qué sigo cargando por lealtad más que por necesidad?'
      ],observe:'Puede que una parte de tu historia siga ocupando un tamaño que no le corresponde: porque se minimiza, se sobredimensiona o todavía gobierna decisiones del presente.',reframe:'Hacer justicia con tu historia no significa borrarla ni quedarte atrapado en ella; significa colocarla en su tamaño real para que sea referencia y no destino.',actions:[
        'Escribir dos columnas: “esto me marcó” y “esto no tiene que gobernar mi siguiente decisión”.',
        'Distinguir una carga que sí me corresponde de otra que aprendí a cargar por lealtad o supervivencia.',
        'Nombrar una experiencia pasada que necesito dejar de minimizar o de convertir en explicación para todo.'
      ],deepen:'J — Justicia con tu historia',connection:'Si al poner la historia en su justa medida aparece una posibilidad nueva, Brújula sugiere explorar Oportunidad en F.O.C.U.S.'},
      {code:'O',name:'Origen',questions:[
        '¿Reconozco cómo mi familia, cultura, entorno y experiencias iniciales moldearon algunas de mis creencias o formas de adaptarme?',
        '¿Puedo distinguir entre lo que aprendí para sobrevivir o pertenecer y lo que hoy elijo seguir sosteniendo?'
      ],observe:'Quizá una forma de pensar o actuar se siente “natural” porque nació en tu entorno de origen, aunque hoy ya no necesariamente responda al contexto actual.',reframe:'En AJOLOTE, el origen influye pero no determina el destino. Comprender de dónde viene una estrategia permite elegir con más conciencia qué conservar, revisar o dejar atrás.',actions:[
        'Completar: “aprendí que debía…, y hoy quiero decidir si todavía me sirve”.',
        'Identificar una creencia o reacción frecuente y preguntarme qué contexto pudo haberla hecho necesaria.',
        'Elegir una respuesta pequeña y segura que refleje el contexto actual, no sólo una estrategia aprendida antes.'
      ],deepen:'O — Origen',connection:'Si comprender tu origen abre una decisión nueva, Brújula sugiere explorar Oportunidad o Convicción en F.O.C.U.S.'},
      {code:'L',name:'Límites',questions:[
        '¿Estoy protegiendo suficientemente mi tiempo, energía, atención y responsabilidades?',
        '¿Puedo poner una frontera clara sin confundir límite con rechazo, culpa o falta de cariño?'
      ],observe:'Puede que no necesites hacer más, sino decidir con mayor claridad hasta dónde llega lo propio y dónde comienza lo que no te corresponde sostener.',reframe:'En AJOLOTE, un límite sano no es dureza ni rechazo: es claridad para preservar recursos finitos y crear condiciones donde puedas recuperarte y decidir mejor.',actions:[
        'Definir una sola frontera concreta para esta semana: tiempo, disponibilidad, responsabilidad o energía.',
        'Responder a una petición con una alternativa realista en lugar de aceptar automáticamente.',
        'Bloquear en mi agenda un espacio que necesito preservar y comunicarlo con claridad si hace falta.'
      ],deepen:'L — Límites',connection:'Si el límite requiere cuidar un vínculo o pedir apoyo, Brújula sugiere explorar Unidad en F.O.C.U.S.'},
      {code:'O',name:'Onus',questions:[
        '¿Estoy asumiendo la parte de responsabilidad que realmente me corresponde sin convertirla en culpa ni cargar con todo?',
        '¿Puedo identificar una acción concreta que depende de mí en lugar de quedarme sólo en la espera, la delegación o la queja?'
      ],observe:'Tal vez ya comprendes la situación, pero falta distinguir qué parte sí está dentro de tu agencia y cuál no debe convertirse en una carga adicional.',reframe:'En AJOLOTE, Onus es responsabilidad consciente: reemplazar la espera pasiva por agencia sin caer en culpa, autoexigencia destructiva ni responsabilidad total por lo que no controlas.',actions:[
        'Separar en dos listas: “me corresponde” y “no me corresponde”.',
        'Elegir un paso pequeño y ejecutable en 24 horas que dependa realmente de mí.',
        'Revisar una preocupación y nombrar qué parte puedo mover y qué parte necesito dejar fuera de mi carga.'
      ],deepen:'O — Onus',connection:'Si necesitas sostener esa responsabilidad con dirección, Brújula sugiere explorar Convicción en F.O.C.U.S.'},
      {code:'T',name:'Transformación',questions:[
        '¿Los cambios que estoy haciendo nacen de una elección consciente más que de presión, comparación, culpa o miedo?',
        '¿Puedo cambiar algo importante sin negar mis valores, límites o sentido para convertirme en alguien que no reconozco?'
      ],observe:'Puede ser útil revisar si el cambio que atraviesas se está integrando a tu identidad o si está ocurriendo como respuesta urgente a una presión externa.',reframe:'En AJOLOTE, la transformación elegida mantiene coherencia interna: puede ser incómoda, pero no necesita borrarte, acelerarte ni sostenerse en culpa o comparación.',actions:[
        'Escribir: “esto sí quiero transformar” y “esto necesito preservar mientras cambio”.',
        'Elegir un cambio pequeño que responda a una decisión propia y no sólo a presión externa.',
        'Identificar una parte del proceso que puedo hacer más deliberadamente para respetar mi ritmo y mis límites.'
      ],deepen:'T — Transformación',connection:'Si buscas una posibilidad concreta dentro del cambio, Brújula sugiere explorar Oportunidad en F.O.C.U.S.'},
      {code:'E',name:'Esencia',questions:[
        '¿Tengo claro qué valores, principios o sentido quiero preservar aunque cambien mis circunstancias?',
        '¿Estoy usando ese eje interno como criterio para tomar decisiones, sin confundir esencia con rigidez o una identidad fija?'
      ],observe:'Cuando todo cambia, la desorientación puede aparecer si dejas de consultar el eje interno desde el cual quieres decidir y avanzar.',reframe:'En AJOLOTE, la esencia no es inmovilidad: es el núcleo de valores, principios y sentido que permite cambiar sin fragmentarte y orientar decisiones con mayor coherencia.',actions:[
        'Elegir tres palabras que representen lo que quiero preservar y usarlas como filtro para una decisión próxima.',
        'Revisar una decisión reciente y preguntarme qué valor o principio estuvo presente —o faltó— en ella.',
        'Completar: “aunque cambie esta situación, quiero seguir caminando desde…”.'
      ],deepen:'E — Esencia',connection:'Si quieres expresar ese eje interno como contribución o legado, Brújula sugiere explorar Sentido en F.O.C.U.S.'}
    ]
  }
};
