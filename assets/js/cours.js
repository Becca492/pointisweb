/* ══════════════════════════════════════════════════════════════
   COURS.JS
   - Par défaut     : tableau statique (T1/T2/T3 via dropdown)
   - Élève choisi   : tableau dynamique personnalisé (T1/T2/T3)
   - Retour défaut  : tableau statique revient
   ══════════════════════════════════════════════════════════════ */

/* ── Données élèves ── */
const elevesEDT = {
  malicka: {
    nom: "Malicka TARNAGADA",
    emoji: "👧",
    classe: "CM2 - A",
    trimestres: {
      1: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "ANGLAIS LV1", jour: 0, debut: 10, fin: 12 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 0, debut: 13, fin: 15 },
        { nom: "PHYSIQUE CHIMIE", jour: 0, debut: 16, fin: 18 },
        { nom: "FRANÇAIS", jour: 1, debut: 9, fin: 11 },
        { nom: "SCIENCES VIE & TERRE", jour: 1, debut: 13, fin: 15 },
        { nom: "SCIENCES", jour: 1, debut: 16, fin: 18 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "ESPAGNOL LV2", jour: 2, debut: 10, fin: 12 },
        { nom: "SC. ÉCONOMIE & SOCIALES", jour: 2, debut: 13, fin: 15 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 15, fin: 17 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 3, debut: 8, fin: 10 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 3, debut: 10, fin: 12 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 14, fin: 16 },
        { nom: "SCIENCES", jour: 3, debut: 16, fin: 18 },
        { nom: "HEURE CREUSE", jour: 4, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 4, debut: 15, fin: 17 },
      ],
      2: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "ANGLAIS LV1", jour: 0, debut: 10, fin: 12 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 0, debut: 13, fin: 15 },
        { nom: "ARTS PLASTIQUES", jour: 0, debut: 16, fin: 18 },
        { nom: "FRANÇAIS", jour: 1, debut: 9, fin: 11 },
        { nom: "SCIENCES VIE & TERRE", jour: 1, debut: 13, fin: 15 },
        { nom: "PHILOSOPHIE", jour: 1, debut: 16, fin: 18 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "ESPAGNOL LV2", jour: 2, debut: 10, fin: 12 },
        { nom: "SC. ÉCONOMIE & SOCIALES", jour: 2, debut: 13, fin: 15 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 15, fin: 17 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 3, debut: 8, fin: 10 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 14, fin: 16 },
        { nom: "SCIENCES", jour: 3, debut: 16, fin: 18 },
        { nom: "HEURE CREUSE", jour: 4, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 4, debut: 15, fin: 17 },
      ],
      3: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "ANGLAIS LV1", jour: 0, debut: 10, fin: 12 },
        { nom: "PHYSIQUE CHIMIE", jour: 0, debut: 13, fin: 15 },
        { nom: "RÉVISIONS", jour: 0, debut: 16, fin: 18 },
        { nom: "FRANÇAIS", jour: 1, debut: 9, fin: 11 },
        { nom: "SCIENCES VIE & TERRE", jour: 1, debut: 13, fin: 15 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "SC. ÉCONOMIE & SOCIALES", jour: 2, debut: 13, fin: 15 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 15, fin: 17 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 3, debut: 8, fin: 10 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 14, fin: 16 },
        { nom: "HEURE CREUSE", jour: 4, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 4, debut: 15, fin: 17 },
      ],
    },
  },
  malek: {
    nom: "Malek TARNAGADA",
    emoji: "👦",
    classe: "CE2 - B",
    trimestres: {
      1: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "LECTURE", jour: 0, debut: 10, fin: 12 },
        { nom: "ARTS", jour: 0, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 1, debut: 8, fin: 10 },
        { nom: "DÉCOUVERTE", jour: 1, debut: 10, fin: 12 },
        { nom: "EPS", jour: 1, debut: 13, fin: 15 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 2, debut: 10, fin: 12 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 8, fin: 10 },
        { nom: "SCIENCES", jour: 3, debut: 10, fin: 12 },
        { nom: "HISTOIRE", jour: 4, debut: 8, fin: 10 },
        { nom: "GÉOGRAPHIE", jour: 4, debut: 10, fin: 12 },
      ],
      2: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "LECTURE", jour: 0, debut: 10, fin: 12 },
        { nom: "EPS", jour: 0, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 1, debut: 8, fin: 10 },
        { nom: "ARTS", jour: 1, debut: 13, fin: 15 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 2, debut: 10, fin: 12 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 8, fin: 10 },
        { nom: "SCIENCES", jour: 3, debut: 10, fin: 12 },
        { nom: "HISTOIRE", jour: 4, debut: 8, fin: 10 },
      ],
      3: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 1, debut: 8, fin: 10 },
        { nom: "EPS", jour: 1, debut: 13, fin: 15 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "RÉVISIONS", jour: 2, debut: 10, fin: 12 },
        { nom: "SCIENCES", jour: 3, debut: 10, fin: 12 },
        { nom: "HISTOIRE", jour: 4, debut: 8, fin: 10 },
      ],
    },
  },
  aminata: {
    nom: "Aminata KONE",
    emoji: "👧🏾",
    classe: "6ème - C",
    trimestres: {
      1: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "ANGLAIS LV1", jour: 0, debut: 10, fin: 12 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 0, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 1, debut: 9, fin: 11 },
        { nom: "SCIENCES VIE & TERRE", jour: 1, debut: 13, fin: 15 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "ESPAGNOL LV2", jour: 2, debut: 10, fin: 12 },
        { nom: "SC. ÉCONOMIE & SOCIALES", jour: 2, debut: 13, fin: 15 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 15, fin: 17 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 3, debut: 8, fin: 10 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 14, fin: 16 },
        { nom: "HEURE CREUSE", jour: 4, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 4, debut: 15, fin: 17 },
      ],
      2: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "ANGLAIS LV1", jour: 0, debut: 10, fin: 12 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 0, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 1, debut: 9, fin: 11 },
        { nom: "SCIENCES VIE & TERRE", jour: 1, debut: 13, fin: 15 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 15, fin: 17 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 3, debut: 8, fin: 10 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 14, fin: 16 },
        { nom: "HEURE CREUSE", jour: 4, debut: 13, fin: 15 },
        { nom: "FRANÇAIS", jour: 4, debut: 15, fin: 17 },
      ],
      3: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 1, debut: 9, fin: 11 },
        { nom: "RÉVISIONS", jour: 2, debut: 8, fin: 10 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 15, fin: 17 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 3, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 4, debut: 15, fin: 17 },
      ],
    },
  },
  moussa: {
    nom: "Moussa DIALLO",
    emoji: "👦🏿",
    classe: "5ème - A",
    trimestres: {
      1: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "PHYSIQUE CHIMIE", jour: 0, debut: 10, fin: 12 },
        { nom: "FRANÇAIS", jour: 1, debut: 8, fin: 10 },
        { nom: "SCIENCES VIE & TERRE", jour: 1, debut: 13, fin: 15 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 8, fin: 10 },
        { nom: "SC. ÉCONOMIE & SOCIALES", jour: 2, debut: 13, fin: 15 },
        { nom: "ANGLAIS LV1", jour: 3, debut: 8, fin: 10 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 14, fin: 16 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 4, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 4, debut: 15, fin: 17 },
      ],
      2: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "PHYSIQUE CHIMIE", jour: 0, debut: 10, fin: 12 },
        { nom: "FRANÇAIS", jour: 1, debut: 8, fin: 10 },
        { nom: "SCIENCES VIE & TERRE", jour: 1, debut: 13, fin: 15 },
        { nom: "HISTOIRE & GÉOGRAPHIE", jour: 2, debut: 8, fin: 10 },
        { nom: "ANGLAIS LV1", jour: 3, debut: 8, fin: 10 },
        { nom: "MATHÉMATIQUES", jour: 3, debut: 14, fin: 16 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 4, debut: 8, fin: 10 },
      ],
      3: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 1, debut: 8, fin: 10 },
        { nom: "RÉVISIONS", jour: 2, debut: 8, fin: 10 },
        { nom: "ANGLAIS LV1", jour: 3, debut: 8, fin: 10 },
        { nom: "ÉDUCATION PHYSIQUE ET SPORT", jour: 4, debut: 8, fin: 10 },
      ],
    },
  },
  ibrahim: {
    nom: "Ibrahim COULIBALY",
    emoji: "👦🏾",
    classe: "CM1 - B",
    trimestres: {
      1: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 0, debut: 10, fin: 12 },
        { nom: "EPS", jour: 0, debut: 13, fin: 15 },
        { nom: "SCIENCES", jour: 1, debut: 8, fin: 10 },
        { nom: "HISTOIRE", jour: 1, debut: 10, fin: 12 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 2, debut: 10, fin: 12 },
        { nom: "GÉOGRAPHIE", jour: 3, debut: 8, fin: 10 },
        { nom: "ANGLAIS", jour: 4, debut: 8, fin: 10 },
        { nom: "ARTS", jour: 4, debut: 13, fin: 15 },
      ],
      2: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 0, debut: 10, fin: 12 },
        { nom: "EPS", jour: 0, debut: 13, fin: 15 },
        { nom: "SCIENCES", jour: 1, debut: 8, fin: 10 },
        { nom: "MATHÉMATIQUES", jour: 2, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 2, debut: 10, fin: 12 },
        { nom: "ANGLAIS", jour: 4, debut: 8, fin: 10 },
      ],
      3: [
        { nom: "MATHÉMATIQUES", jour: 0, debut: 8, fin: 10 },
        { nom: "FRANÇAIS", jour: 0, debut: 10, fin: 12 },
        { nom: "SCIENCES", jour: 1, debut: 8, fin: 10 },
        { nom: "RÉVISIONS", jour: 2, debut: 8, fin: 10 },
        { nom: "ANGLAIS", jour: 4, debut: 8, fin: 10 },
      ],
    },
  },
  clarisse: {
    nom: "Clarisse BAMBA",
    emoji: "👧🏽",
    classe: "CP - A",
    trimestres: {
      1: [
        { nom: "LECTURE", jour: 0, debut: 8, fin: 10 },
        { nom: "CALCUL", jour: 0, debut: 10, fin: 12 },
        { nom: "ÉVEIL", jour: 1, debut: 8, fin: 10 },
        { nom: "ÉCRITURE", jour: 1, debut: 10, fin: 12 },
        { nom: "LECTURE", jour: 2, debut: 8, fin: 10 },
        { nom: "CALCUL", jour: 2, debut: 10, fin: 12 },
        { nom: "DESSIN", jour: 3, debut: 8, fin: 10 },
        { nom: "ÉCRITURE", jour: 3, debut: 10, fin: 12 },
        { nom: "EPS", jour: 4, debut: 8, fin: 10 },
        { nom: "ÉVEIL", jour: 4, debut: 10, fin: 12 },
      ],
      2: [
        { nom: "LECTURE", jour: 0, debut: 8, fin: 10 },
        { nom: "CALCUL", jour: 0, debut: 10, fin: 12 },
        { nom: "ÉVEIL", jour: 1, debut: 8, fin: 10 },
        { nom: "ÉCRITURE", jour: 1, debut: 10, fin: 12 },
        { nom: "CALCUL", jour: 2, debut: 10, fin: 12 },
        { nom: "DESSIN", jour: 3, debut: 8, fin: 10 },
        { nom: "EPS", jour: 4, debut: 8, fin: 10 },
      ],
      3: [
        { nom: "LECTURE", jour: 0, debut: 8, fin: 10 },
        { nom: "CALCUL", jour: 0, debut: 10, fin: 12 },
        { nom: "ÉVEIL", jour: 1, debut: 8, fin: 10 },
        { nom: "RÉVISIONS", jour: 2, debut: 8, fin: 10 },
        { nom: "EPS", jour: 4, debut: 8, fin: 10 },
      ],
    },
  },
};

/* ── Constantes ── */
const HEURES = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const JOURS = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI"];

const labels = [
  "1er TRIMESTRE 2026",
  "2ème TRIMESTRE 2026",
  "3ème TRIMESTRE 2026",
];
const badgeClasses = ["badge-t1", "badge-t2", "badge-t3"];
const optClasses = ["active-t1", "active-t2", "active-t3"];

/* Palette couleurs */
const PALETTE = [
  ["MATHÉMATIQUES", "#dbeafe", "#1d4ed8"],
  ["FRANÇAIS", "#fce7f3", "#be185d"],
  ["ANGLAIS", "#dcfce7", "#15803d"],
  ["ESPAGNOL", "#f3e8ff", "#7e22ce"],
  ["SCIENCES VIE", "#ccfbf1", "#0f766e"],
  ["SCIENCES", "#e0f2fe", "#0369a1"],
  ["HISTOIRE", "#fef9c3", "#854d0e"],
  ["GÉOGRAPHIE", "#fef9c3", "#854d0e"],
  ["ÉDUCATION PHYSIQUE", "#dcfce7", "#166534"],
  ["EPS", "#dcfce7", "#166534"],
  ["PHYSIQUE CHIMIE", "#ffedd5", "#9a3412"],
  ["SC. ÉCONOMIE", "#f0fdf4", "#166534"],
  ["HEURE CREUSE", "#f3f4f6", "#6b7280"],
  ["ARTS", "#fdf4ff", "#86198f"],
  ["PHILOSOPHIE", "#ede9fe", "#5b21b6"],
  ["LECTURE", "#dbeafe", "#1d4ed8"],
  ["ÉCRITURE", "#fce7f3", "#be185d"],
  ["CALCUL", "#dcfce7", "#15803d"],
  ["ÉVEIL", "#fef9c3", "#854d0e"],
  ["DESSIN", "#fdf4ff", "#86198f"],
  ["DÉCOUVERTE", "#ccfbf1", "#0f766e"],
  ["RÉVISIONS", "#fff7ed", "#c2410c"],
];

function getStyle(nom) {
  const upper = nom.toUpperCase();
  for (const [key, bg, color] of PALETTE) {
    if (upper.includes(key)) return { bg, color };
  }
  return { bg: "#f0f0f0", color: "#444" };
}

/* ── État courant ── */
let currentEleve = null;
let currentTrimestre = 1;

/* ══ Construction du tableau dynamique ══ */
function buildTable(eleveId, trimestre) {
  const data = elevesEDT[eleveId];
  const cours = (data && data.trimestres[trimestre]) || [];

  const grid = {};
  cours.forEach((c) => {
    for (let h = c.debut; h < c.fin; h++) {
      if (!grid[h]) grid[h] = {};
      grid[h][c.jour] =
        h === c.debut ? { nom: c.nom, rowspan: c.fin - c.debut } : "skip";
    }
  });

  let html = `
    <table class="timetable">
      <thead>
        <tr>
          <th></th>
          ${JOURS.map((j) => `<th>${j}</th>`).join("")}
        </tr>
      </thead>
      <tbody>`;

  HEURES.forEach((h, rowIdx) => {
    html += `<tr style="animation:fadeUp 0.25s ease ${rowIdx * 0.03}s both">`;
    html += `<td class="time-cell">${h}h00</td>`;
    for (let j = 0; j < 5; j++) {
      const cell = grid[h] ? grid[h][j] : undefined;
      if (cell === "skip") continue;
      if (cell && cell.nom) {
        const { bg, color } = getStyle(cell.nom);
        html += `<td class="course-cell" rowspan="${cell.rowspan}"
                     style="background:${bg};border-left:3px solid ${color}">
                   <div class="course-name" style="color:${color}">${cell.nom}</div>
                 </td>`;
      } else {
        html += `<td class="empty-cell"></td>`;
      }
    }
    html += `</tr>`;
  });

  html += `</tbody></table>`;
  document.getElementById("timetable-wrap").innerHTML = html;
}

/* ══ Sélection élève ══ */
function onKidSelect(val) {
  const wrap = document.getElementById("kidSelectWrap");
  const staticTable = document.getElementById("staticTimetable");
  const dynTable = document.getElementById("timetable-wrap");
  const banner = document.getElementById("eleve-banner");

  if (val && elevesEDT[val]) {
    currentEleve = val;
    wrap.classList.add("selected");

    /* Remplir le bandeau */
    const e = elevesEDT[val];
    document.getElementById("eleve-emoji").textContent = e.emoji;
    document.getElementById("eleve-nom").textContent = e.nom;
    document.getElementById("eleve-classe").textContent = "🏫 " + e.classe;

    /* Afficher bandeau + tableau dynamique, cacher statique */
    banner.style.display = "flex";
    staticTable.style.display = "none";
    dynTable.style.display = "";

    buildTable(val, currentTrimestre);
  } else {
    currentEleve = null;
    wrap.classList.remove("selected");

    /* Cacher bandeau + tableau dynamique, afficher statique */
    banner.style.display = "none";
    staticTable.style.display = "";
    dynTable.style.display = "none";
    dynTable.innerHTML = "";

    /* Remettre le bon trimestre sur le tableau statique */
    syncStaticTrimestre(currentTrimestre);
  }
}

/* ══ Sélection trimestre ══ */
function toggleDropdown() {
  document.getElementById("trim-dropdown").classList.toggle("open");
}

document.addEventListener("click", function (e) {
  if (
    !e.target.closest("#trimestre-badge") &&
    !e.target.closest("#trim-dropdown")
  ) {
    document.getElementById("trim-dropdown").classList.remove("open");
  }
});

function setTrimestre(n) {
  currentTrimestre = n;
  const i = n - 1;

  /* Mettre à jour le badge */
  const badge = document.getElementById("trimestre-badge");
  badge.className = "trimestre-badge " + badgeClasses[i];
  badge.innerHTML = labels[i] + " ▾";

  /* Mettre à jour les options */
  document.querySelectorAll(".trim-option").forEach(function (opt, idx) {
    opt.className = "trim-option" + (idx === i ? " " + optClasses[idx] : "");
  });

  document.getElementById("trim-dropdown").classList.remove("open");

  if (currentEleve) {
    /* Mode élève → reconstruire le tableau dynamique */
    buildTable(currentEleve, n);
  } else {
    /* Mode défaut → afficher la bonne table statique */
    syncStaticTrimestre(n);
  }
}

/* Affiche le bon tableau statique selon le trimestre */
function syncStaticTrimestre(n) {
  [1, 2, 3].forEach(function (t) {
    var table = document.getElementById("table-t" + t);
    if (table) table.style.display = t === n ? "" : "none";
  });
}
