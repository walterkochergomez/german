// ==========================================
// LÓGICA DE PESTAÑAS
// ==========================================
function show(level, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + level).classList.add('active');
  btn.classList.add('active');
  
  if(level === 'fc-verbs') loadNextCard('verb');
  if(level === 'fc-words') loadNextCard('word');
}

// ==========================================
// BASE DE DATOS (NUEVO FORMATO TIPO TEXTO)
// ==========================================
// Pega tus datos aquí. Formato: Infinitivo | Perfekt | Präteritum | Español
const rawVerbs = `
sein|ist gewesen|war|ser, estar
haben|hat gehabt|hatte|tener
werden|ist geworden|wurde|llegar a ser, convertirse
können|hat gekonnt|konnte|poder
müssen|hat gemusst|musste|tener que
wollen|hat gewollt|wollte|querer
dürfen|hat gedurft|durfte|tener permiso
sollen|hat gesollt|sollte|deber
mögen|hat gemocht|mochte|gustar
wissen|hat gewusst|wusste|saber
sagen|hat gesagt|sagte|decir
sprechen|hat gesprochen|sprach|hablar
reden|hat geredet|redete|conversar
erzählen|hat erzählt|erzählte|contar, narrar
fragen|hat gefragt|fragte|preguntar
antworten|hat geantwortet|antwortete|responder
rufen|hat gerufen|rief|llamar
schreien|hat geschrien|schrie|gritar
flüstern|hat geflüstert|flüsterte|susurrar
hören|hat gehört|hörte|escuchar
sehen|hat gesehen|sah|ver
anschauen|hat angeschaut|schaute an|mirar
beobachten|hat beobachtet|beobachtete|observar
zeigen|hat gezeigt|zeigte|mostrar
finden|hat gefunden|fand|encontrar
suchen|hat gesucht|suchte|buscar
kennen|hat gekannt|kannte|conocer
erkennen|hat erkannt|erkannte|reconocer
verstehen|hat verstanden|verstand|entender
lernen|hat gelernt|lernte|aprender
studieren|hat studiert|studierte|estudiar
lesen|hat gelesen|las|leer
schreiben|hat geschrieben|schrieb|escribir
buchstabieren|hat buchstabiert|buchstabierte|deletrear
übersetzen|hat übersetzt|übersetzte|traducir
erklären|hat erklärt|erklärte|explicar
denken|hat gedacht|dachte|pensar
glauben|hat geglaubt|glaubte|creer
meinen|hat gemeint|meinte|opinar
vergessen|hat vergessen|vergaß|olvidar
erinnern|hat erinnert|erinnerte|recordar
träumen|hat geträumt|träumte|soñar
planen|hat geplant|plante|planear
entscheiden|hat entschieden|entschied|decidir
versuchen|hat versucht|versuchte|intentar
beginnen|hat begonnen|begann|comenzar
anfangen|hat angefangen|fing an|empezar
enden|hat geendet|endete|terminar
aufhören|hat aufgehört|hörte auf|dejar de
machen|hat gemacht|machte|hacer
tun|hat getan|tat|hacer (acción)
arbeiten|hat gearbeitet|arbeitete|trabajar
helfen|hat geholfen|half|ayudar
benutzen|hat benutzt|benutzte|usar
brauchen|hat gebraucht|brauchte|necesitar
versprechen|hat versprochen|versprach|prometer
gewinnen|hat gewonnen|gewann|ganar
verlieren|hat verloren|verlor|perder
bezahlen|hat bezahlt|bezahlte|pagar
kosten|hat gekostet|kostete|costar
kaufen|hat gekauft|kaufte|comprar
verkaufen|hat verkauft|verkaufte|vender
bestellen|hat bestellt|bestellte|pedir, ordenar
bringen|hat gebracht|brachte|traer
holen|hat geholt|holte|ir a buscar
nehmen|hat genommen|nahm|tomar
geben|hat gegeben|gab|dar
bekommen|hat bekommen|bekam|recibir
erhalten|hat erhalten|erhielt|recibir, conservar
lassen|hat gelassen|ließ|dejar
halten|hat gehalten|hielt|sostener, parar
tragen|hat getragen|trug|llevar puesto, cargar
ziehen|hat gezogen|zog|tirar, mudarse
drücken|hat gedrückt|drückte|presionar
werfen|hat geworfen|warf|lanzar
fangen|hat gefangen|fing|atrapar
schneiden|hat geschnitten|schnitt|cortar
öffnen|hat geöffnet|öffnete|abrir
schließen|hat geschlossen|schloss|cerrar
bauen|hat gebaut|baute|construir
reparieren|hat repariert|reparierte|reparar
putzen|hat geputzt|putzte|limpiar
waschen|hat gewaschen|wusch|lavar
kochen|hat gekocht|kochte|cocinar
backen|hat gebacken|buk|hornear
essen|hat gegessen|aß|comer
trinken|hat getrunken|trank|beber
schmecken|hat geschmeckt|schmeckte|tener sabor
riechen|hat gerochen|roch|oler
schlafen|hat geschlafen|schlief|dormir
aufwachen|ist aufgewacht|wachte auf|despertarse
einschlafen|ist eingeschlafen|schlief ein|quedarse dormido
leben|hat gelebt|lebte|vivir
sterben|ist gestorben|starb|morir
geboren werden|ist geboren worden|wurde geboren|nacer
wachsen|ist gewachsen|wuchs|crecer
bleiben|ist geblieben|blieb|quedarse
wohnen|hat gewohnt|wohnte|vivir, residir
reisen|ist gereist|reiste|viajar
fahren|ist gefahren|fuhr|conducir, ir en vehículo
fliegen|ist geflogen|flog|volar
gehen|ist gegangen|ging|ir
kommen|ist gekommen|kam|venir
ankommen|ist angekommen|kam an|llegar
abfahren|ist abgefahren|fuhr ab|partir
rennen|ist gerannt|rannte|correr
laufen|ist gelaufen|lief|correr, caminar
spazieren|ist spaziert|spazierte|pasear
schwimmen|ist geschwommen|schwamm|nadar
tanzen|hat getanzt|tanzte|bailar
springen|ist gesprungen|sprang|saltar
klettern|ist geklettert|kletterte|trepar
sitzen|hat gesessen|saß|estar sentado
stehen|hat gestanden|stand|estar de pie
liegen|hat gelegen|lag|estar acostado/situado
setzen|hat gesetzt|setzte|poner, sentar
stellen|hat gestellt|stellte|colocar (vertical)
legen|hat gelegt|legte|colocar (horizontal)
treffen|hat getroffen|traf|encontrar
besuchen|hat besucht|besuchte|visitar
einladen|hat eingeladen|lud ein|invitar
heiraten|hat geheiratet|heiratete|casarse
lieben|hat geliebt|liebte|amar
hassen|hat gehasst|hasste|odiar
lachen|hat gelacht|lachte|reír
weinen|hat geweint|weinte|llorar
lächeln|hat gelächelt|lächelte|sonreír
fühlen|hat gefühlt|fühlte|sentir
hoffen|hat gehofft|hoffte|esperar
fürchten|hat gefürchtet|fürchtete|temer
ärgern|hat geärgert|ärgerte|molestar
freuen|hat gefreut|freute|alegrar
gefallen|hat gefallen|gefiel|gustar
gehören|hat gehört|gehörte|pertenecer
passen|hat gepasst|passte|quedar bien
brauchen|hat gebraucht|brauchte|necesitar
wählen|hat gewählt|wählte|elegir
ändern|hat geändert|änderte|cambiar
verbessern|hat verbessert|verbesserte|mejorar
entwickeln|hat entwickelt|entwickelte|desarrollar
schaffen|hat geschafft|schaffte|lograr, crear
erreichen|hat erreicht|erreichte|alcanzar
gewinnen|hat gewonnen|gewann|ganar
verlieren|hat verloren|verlor|perder
existieren|hat existiert|existierte|existir
entstehen|ist entstanden|entstand|surgir
passieren|ist passiert|passierte|pasar, suceder
gelten|hat gegolten|galt|ser válido
funktionieren|hat funktioniert|funktionierte|funcionar
verwenden|hat verwendet|verwendete|utilizar
kontrollieren|hat kontrolliert|kontrollierte|controlar
steuern|hat gesteuert|steuerte|dirigir, controlar
analysieren|hat analysiert|analysierte|analizar
testen|hat getestet|testete|probar
simulieren|hat simuliert|simulierte|simular
programmieren|hat programmiert|programmierte|programar
optimieren|hat optimiert|optimierte|optimizar
entwerfen|hat entworfen|entwarf|diseñar
installieren|hat installiert|installierte|instalar
verbinden|hat verbunden|verband|conectar
laden|hat geladen|lud|cargar
speichern|hat gespeichert|speicherte|guardar
löschen|hat gelöscht|löschte|eliminar
starten|hat gestartet|startete|iniciar
stoppen|hat gestoppt|stoppte|detener
warten|hat gewartet|wartete|esperar
rechnen|hat gerechnet|rechnete|calcular
messen|hat gemessen|maß|medir
zählen|hat gezählt|zählte|contar
vergleichen|hat verglichen|verglich|comparar
untersuchen|hat untersucht|untersuchte|examinar
zeichnen|hat gezeichnet|zeichnete|dibujar
malen|hat gemalt|malte|pintar
singen|hat gesungen|sang|cantar
spielen|hat gespielt|spielte|jugar
üben|hat geübt|übte|practicar
gewinnen|hat gewonnen|gewann|vencer
trainieren|hat trainiert|trainierte|entrenar
telefonieren|hat telefoniert|telefonierte|telefonear
fotografieren|hat fotografiert|fotografierte|fotografiar
feiern|hat gefeiert|feierte|celebrar
wünschen|hat gewünscht|wünschte|desear
gratulieren|hat gratuliert|gratulierte|felicitar
danken|hat gedankt|dankte|agradecer
entschuldigen|hat entschuldigt|entschuldigte|disculpar
erlauben|hat erlaubt|erlaubte|permitir
verbieten|hat verboten|verbot|prohibir
empfehlen|hat empfohlen|empfahl|recomendar
erwarten|hat erwartet|erwartete|esperar
akzeptieren|hat akzeptiert|akzeptierte|aceptar
ablehnen|hat abgelehnt|lehnte ab|rechazar
`;

// Formato: Artículo Palabra | Español
const rawWords = `
der Mann|el hombre
die Frau|la mujer
das Kind|el niño
der Tag|el día
die Zeit|el tiempo
das Jahr|el año
der Weg|el camino
das Haus|la casa
die Welt|el mundo
das Land|el país
die Frage|la pregunta
das Problem|el problema
das Beispiel|el ejemplo
die Arbeit|el trabajo
die Hand|la mano
die Stadt|la ciudad
das Leben|la vida
der Mensch|el ser humano
der Fall|el caso
das Ding|la cosa
die Person|la persona
der Ort|el lugar
das Wort|la palabra
die Familie|la familia
das Geld|el dinero
das Unternehmen|la empresa
die Industrie|la industria
der Prozess|el proceso
die Daten|los datos
das System|el sistema
die Steuerung|el control (PLC), la dirección
die Anlage|la instalación, la planta industrial
die Maschine|la máquina
die Qualität|la calidad
das Modell|el modelo
der Zwilling|el gemelo (ej. Digitaler Zwilling)
das Projekt|el proyecto
die Analyse|el análisis
die Logistik|la logística
das Netzwerk|la red
die Wartung|el mantenimiento
der Algorithmus|el algoritmo
das Risiko|el riesgo
das Management|la gestión
der Bereich|el área, el sector
das Bild|la imagen, el cuadro
das Buch|el libro
der Freund|el amigo
das Wasser|el agua
das Auge|el ojo
die Mutter|la madre
der Vater|el padre
die Geschichte|la historia
die Art|el tipo, la forma
die Seite|el lado, la página
die Entwicklung|el desarrollo
das Ergebnis|el resultado
die Aufgabe|la tarea, el deber
die Form|la forma
das Recht|el derecho
der Sinn|el sentido
der Staat|el estado
die Woche|la semana
die Sprache|el idioma
der Monat|el mes
der Platz|el lugar, la plaza
das Ziel|el objetivo, la meta
die Idee|la idea
der Grund|la razón, el motivo
die Gesellschaft|la sociedad
die Möglichkeit|la posibilidad
der Raum|el espacio, la habitación
der Schüler|el alumno
der Student|el estudiante universitario
das Studium|los estudios universitarios
die Universität|la universidad
die Firma|la empresa, la firma
der Markt|el mercado
der Preis|el precio
das Produkt|el producto
der Kunde|el cliente
der Mitarbeiter|el empleado, el colaborador
der Chef|el jefe
das Büro|la oficina
der Computer|el ordenador
das Programm|el programa
das Internet|el internet
die Technologie|la tecnología
der Wert|el valor
die Leistung|el rendimiento, la potencia
die Erfahrung|la experiencia
die Zukunft|el futuro
die Vergangenheit|el pasado
die Regel|la regla
das Werkzeug|la herramienta
die Methode|el método
die Produktion|la producción
der Fehler|el error
das Material|el material
`;

// Procesador de texto a Base de Datos de Objetos
const dbVerbs = rawVerbs.split('\n').map(l => l.trim()).filter(l => l.includes('|')).map((line, i) => {
  const parts = line.split('|');
  return { id: 'v' + i, inf: parts[0].trim(), perf: parts[1].trim(), prat: parts[2].trim(), es: parts[3].trim() };
});

const dbWords = rawWords.split('\n').map(l => l.trim()).filter(l => l.includes('|')).map((line, i) => {
  const parts = line.split('|');
  return { id: 'w' + i, de: parts[0].trim(), es: parts[1].trim() };
});


// ==========================================
// LÓGICA SPACED REPETITION (SRS) CON COOLDOWN
// ==========================================

let currentCard = { verb: null, word: null };
let isFlipped = { verb: false, word: false };

// SISTEMA DE ENFRIAMIENTO: Recuerda las últimas 5 tarjetas vistas
let recentCards = { verb: [], word: [] }; 
const COOLDOWN_STEPS = 5; 

function getProgress(type) {
  const data = localStorage.getItem(`srs_${type}`);
  return data ? JSON.parse(data) : {};
}

function saveProgress(type, data) {
  localStorage.setItem(`srs_${type}`, JSON.stringify(data));
}

function resetProgress(type) {
  if(confirm("¿Seguro que quieres reiniciar este mazo? Se borrará tu historial de repasos y todas volverán a ser tarjetas nuevas.")) {
    localStorage.removeItem(`srs_${type}`);
    recentCards[type] = []; // Reiniciamos también la memoria de enfriamiento
    loadNextCard(type);
  }
}

function calculateNextInterval(cardProgress, quality) {
  let ease = cardProgress.ease || 2.5;
  let interval = cardProgress.interval || 0;
  let reps = cardProgress.reps || 0;

  if (quality === 0) {
    reps = 0;
    interval = 0; 
    ease = Math.max(1.3, ease - 0.2);
  } else {
    if (reps === 0) interval = 1;      
    else if (reps === 1) interval = 3; 
    else interval = Math.round(interval * ease); 
    reps++;
  }

  const nextReview = Date.now() + (interval * 24 * 60 * 60 * 1000);
  return { ease, interval, reps, nextReview };
}

function loadNextCard(type) {
  const db = type === 'verb' ? dbVerbs : dbWords;
  const progress = getProgress(type);
  const now = Date.now();

  let queueNew = [];
  let queueReview = [];
  let queueLearning = [];

  // Clasificamos todas las tarjetas según su estado
  db.forEach(item => {
    const p = progress[item.id];
    if (!p) {
      queueNew.push(item);
    } else if (p.nextReview <= now) {
      if (p.interval === 0) queueLearning.push(item);
      else queueReview.push(item);
    }
  });

  document.getElementById(`${type}-stat-new`).innerText = queueNew.length;
  document.getElementById(`${type}-stat-learn`).innerText = queueLearning.length;
  document.getElementById(`${type}-stat-review`).innerText = queueReview.length;

  let nextItem = null;

  // FILTRO DE ENFRIAMIENTO: Excluimos las tarjetas que vimos recientemente
  const availLearn = queueLearning.filter(c => !recentCards[type].includes(c.id));
  const availReview = queueReview.filter(c => !recentCards[type].includes(c.id));
  const availNew = queueNew.filter(c => !recentCards[type].includes(c.id));

  // Prioridad 1: Aprender | Prioridad 2: Repasar | Prioridad 3: Nuevas
  if (availLearn.length > 0) {
    nextItem = availLearn[Math.floor(Math.random() * availLearn.length)];
  } else if (availReview.length > 0) {
    nextItem = availReview[Math.floor(Math.random() * availReview.length)];
  } else if (availNew.length > 0) {
    nextItem = availNew[Math.floor(Math.random() * availNew.length)];
  } else {
    // SALVAVIDAS: Si TODAS las tarjetas pendientes están en la memoria de enfriamiento 
    // Buscamos cuál fue la que viste hace MÁS tiempo dentro de esas recientes.
    for (let i = 0; i < recentCards[type].length; i++) {
        let id = recentCards[type][i];
        let found = queueLearning.find(c => c.id === id) || queueReview.find(c => c.id === id) || queueNew.find(c => c.id === id);
        if (found) {
            nextItem = found;
            break; // Rompemos el ciclo en la más antigua (índice 0)
        }
    }
  }

  const area = document.getElementById(`${type}-fc-area`);
  const emptyState = document.getElementById(`${type}-empty-state`);

  // Si a pesar de todo no hay siguiente tarjeta, mostramos el mensaje de fin
  if (!nextItem) {
    area.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  area.style.display = 'block';
  emptyState.style.display = 'none';

  const cardEl = document.getElementById(`${type}-card`);
  
  cardEl.style.transition = 'none';
  cardEl.classList.remove('is-flipped');
  isFlipped[type] = false;
  document.getElementById(`${type}-controls`).classList.remove('visible');

  currentCard[type] = nextItem;
  if (type === 'verb') {
    document.getElementById('verb-front-inf').innerText = nextItem.inf;
    document.getElementById('verb-back-es').innerText = nextItem.es;
    document.getElementById('verb-back-perf').innerText = nextItem.perf;
    document.getElementById('verb-back-prat').innerText = nextItem.prat;
  } else {
    document.getElementById('word-front-de').innerText = nextItem.de;
    document.getElementById('word-back-es').innerText = nextItem.es;
  }

  setTimeout(() => {
    cardEl.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
  }, 50);
}

function flipCard(type) {
  if (isFlipped[type] || !currentCard[type]) return; 
  
  isFlipped[type] = true;
  document.getElementById(`${type}-card`).classList.add('is-flipped');
  
  setTimeout(() => {
    document.getElementById(`${type}-controls`).classList.add('visible');
  }, 300);
}

function processAnswer(type, quality) {
  if (!currentCard[type]) return;

  const progress = getProgress(type);
  const cardId = currentCard[type].id;
  const currentP = progress[cardId] || { ease: 2.5, interval: 0, reps: 0 };
  
  progress[cardId] = calculateNextInterval(currentP, quality);
  saveProgress(type, progress);
  
  // ACTUALIZAR MEMORIA RECIENTE (SISTEMA DE ENFRIAMIENTO)
  recentCards[type] = recentCards[type].filter(id => id !== cardId); 
  recentCards[type].push(cardId);
  if (recentCards[type].length > COOLDOWN_STEPS) {
    recentCards[type].shift();
  }
  
  document.getElementById(`${type}-controls`).classList.remove('visible');
  setTimeout(() => {
    loadNextCard(type);
  }, 150);
}
