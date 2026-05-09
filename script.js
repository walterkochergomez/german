// ==========================================
// UTILIDAD: PARSEO DE CSV
// ==========================================

/**
 * Parsea un string CSV con encabezado.
 * Soporta campos con comas dentro de comillas dobles.
 */
function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') { inQuotes = !inQuotes; }
      else if (char === ',' && !inQuotes) { values.push(current.trim()); current = ''; }
      else { current += char; }
    }
    values.push(current.trim());
    const obj = {};
    headers.forEach((h, i) => { obj[h] = values[i] ?? ''; });
    return obj;
  });
}

/**
 * Carga un archivo CSV desde una ruta relativa.
 * Muestra error amigable si no se puede cargar.
 */
async function loadCSV(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`No se pudo cargar ${path} (${res.status})`);
  return parseCSV(await res.text());
}

// ==========================================
// BASE DE DATOS (cargada desde CSV)
// ==========================================

let dbVerbs = [];
let dbWords = [];

async function initData() {
  try {
    dbVerbs = await loadCSV('data/verbos.csv');
  } catch (e) {
    console.error(e);
    showFCError('verb', 'No se pudo cargar data/verbos.csv. Comprueba que el archivo existe.');
  }
  try {
    dbWords = await loadCSV('data/palabras.csv');
  } catch (e) {
    console.error(e);
    showFCError('word', 'No se pudo cargar data/palabras.csv. Comprueba que el archivo existe.');
  }
}

function showFCError(type, msg) {
  const area = document.getElementById(`${type}-fc-area`);
  if (area) {
    area.innerHTML = `<div class="fc-error">⚠️ ${msg}</div>`;
  }
}

// ==========================================
// LÓGICA DE PESTAÑAS
// ==========================================

function show(level, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + level).classList.add('active');
  btn.classList.add('active');
  if (level === 'fc-verbs') loadNextCard('verb');
  if (level === 'fc-words') loadNextCard('word');
}

// ==========================================
// LÓGICA SRS (Spaced Repetition)
// ==========================================

let currentCard = { verb: null, word: null };
let isFlipped   = { verb: false, word: false };
let lastCardId  = { verb: null, word: null };

function getProgress(type) {
  const data = localStorage.getItem(`srs_${type}`);
  return data ? JSON.parse(data) : {};
}

function saveProgress(type, data) {
  localStorage.setItem(`srs_${type}`, JSON.stringify(data));
}

function resetProgress(type) {
  if (confirm('¿Seguro que quieres reiniciar este mazo? Se borrará tu historial de repasos.')) {
    localStorage.removeItem(`srs_${type}`);
    lastCardId[type] = null;
    loadNextCard(type);
  }
}

function calculateNextInterval(cardProgress, quality) {
  let ease     = cardProgress.ease     ?? 2.5;
  let interval = cardProgress.interval ?? 0;
  let reps     = cardProgress.reps     ?? 0;

  if (quality === 0) {
    reps = 0; interval = 0; ease = Math.max(1.3, ease - 0.2);
  } else {
    if      (reps === 0) interval = 1;
    else if (reps === 1) interval = 3;
    else                 interval = Math.round(interval * ease);
    reps++;
  }

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;
  return { ease, interval, reps, nextReview };
}

function loadNextCard(type) {
  const db = type === 'verb' ? dbVerbs : dbWords;

  // Si los datos aún no cargaron, mostrar loading
  if (!db || db.length === 0) {
    const area = document.getElementById(`${type}-fc-area`);
    if (area && !area.querySelector('.fc-error')) {
      area.innerHTML = '<div class="fc-loading">Cargando tarjetas…</div>';
    }
    return;
  }

  const progress = getProgress(type);
  const now      = Date.now();

  const queueNew      = [];
  const queueReview   = [];
  const queueLearning = [];

  db.forEach(item => {
    const p = progress[item.id];
    if (!p) {
      queueNew.push(item);
    } else if (p.nextReview <= now) {
      if (p.interval === 0) queueLearning.push(item);
      else                  queueReview.push(item);
    }
  });

  document.getElementById(`${type}-stat-new`).innerText    = queueNew.length;
  document.getElementById(`${type}-stat-learn`).innerText  = queueLearning.length;
  document.getElementById(`${type}-stat-review`).innerText = queueReview.length;

  const lastId = lastCardId[type];
  const avail  = (arr) => arr.filter(c => c.id !== lastId);

  let nextItem =
    avail(queueLearning)[Math.floor(Math.random() * avail(queueLearning).length)] ||
    avail(queueReview)  [Math.floor(Math.random() * avail(queueReview).length)]   ||
    avail(queueNew)     [Math.floor(Math.random() * avail(queueNew).length)]       ||
    queueLearning[0] || queueReview[0] || queueNew[0] || null;

  const area       = document.getElementById(`${type}-fc-area`);
  const emptyState = document.getElementById(`${type}-empty-state`);

  if (!nextItem) {
    area.style.display       = 'none';
    emptyState.style.display = 'block';
    return;
  }

  area.style.display       = 'block';
  emptyState.style.display = 'none';

  const cardEl = document.getElementById(`${type}-card`);
  cardEl.style.transition = 'none';
  cardEl.classList.remove('is-flipped');
  isFlipped[type] = false;
  document.getElementById(`${type}-controls`).classList.remove('visible');

  currentCard[type] = nextItem;

  if (type === 'verb') {
    document.getElementById('verb-front-inf').innerText  = nextItem.inf;
    document.getElementById('verb-back-es').innerText    = nextItem.es;
    document.getElementById('verb-back-perf').innerText  = nextItem.perf;
    document.getElementById('verb-back-prat').innerText  = nextItem.prat;
  } else {
    document.getElementById('word-front-de').innerText = nextItem.de;
    document.getElementById('word-back-es').innerText  = nextItem.es;
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
  const cardId   = currentCard[type].id;
  progress[cardId] = calculateNextInterval(progress[cardId] || {}, quality);
  saveProgress(type, progress);
  lastCardId[type] = cardId;
  document.getElementById(`${type}-controls`).classList.remove('visible');
  setTimeout(() => loadNextCard(type), 150);
}

// ==========================================
// ARRANQUE
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  await initData();     // Carga los CSV
  loadNextCard('verb'); // Pre-carga la pestaña activa inicial si fuera flashcards
});
