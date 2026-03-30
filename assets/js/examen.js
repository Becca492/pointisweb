/* ══════════════════════════════════════════════════════════════
   EXAMEN.JS
   - Par défaut   : grille de matières statique
   - Élève choisi : liste d'examens et devoirs personnalisés
   ══════════════════════════════════════════════════════════════ */

const elevesExamens = {
  malicka: {
    nom: "Malicka TARNAGADA",
    emoji: "👧",
    classe: "CM2 - A",
    examens: [
      {
        matiere: "Mathématiques",
        type: "Examen",
        date: "28 Mars 2026",
        sujet: "Fractions et pourcentages",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Français",
        type: "Devoir",
        date: "26 Mars 2026",
        sujet: "Rédaction : ma journée idéale",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Sciences",
        type: "Examen",
        date: "02 Avr. 2026",
        sujet: "Les êtres vivants",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Histoire-Géo",
        type: "Devoir",
        date: "20 Mars 2026",
        sujet: "La Révolution française",
        statut: "done",
        note: 15,
      },
      {
        matiere: "Anglais",
        type: "Examen",
        date: "15 Mars 2026",
        sujet: "Vocabulaire et conjugaison",
        statut: "done",
        note: 14,
      },
      {
        matiere: "Sciences",
        type: "Devoir",
        date: "10 Mars 2026",
        sujet: "Le cycle de l'eau",
        statut: "done",
        note: 18,
      },
    ],
  },
  malek: {
    nom: "Malek TARNAGADA",
    emoji: "👦",
    classe: "CE2 - B",
    examens: [
      {
        matiere: "Mathématiques",
        type: "Devoir",
        date: "27 Mars 2026",
        sujet: "Tables de multiplication",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Français",
        type: "Examen",
        date: "29 Mars 2026",
        sujet: "Dictée et grammaire",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Découverte",
        type: "Devoir",
        date: "01 Avr. 2026",
        sujet: "Les animaux de la ferme",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Mathématiques",
        type: "Examen",
        date: "18 Mars 2026",
        sujet: "Addition et soustraction",
        statut: "done",
        note: 10,
      },
      {
        matiere: "Français",
        type: "Devoir",
        date: "12 Mars 2026",
        sujet: "Lecture à voix haute",
        statut: "done",
        note: 12,
      },
      {
        matiere: "Histoire",
        type: "Devoir",
        date: "05 Mars 2026",
        sujet: "La préhistoire",
        statut: "done",
        note: 9,
      },
    ],
  },
  aminata: {
    nom: "Aminata KONE",
    emoji: "👧🏾",
    classe: "6ème - C",
    examens: [
      {
        matiere: "Mathématiques",
        type: "Examen",
        date: "28 Mars 2026",
        sujet: "Équations du 1er degré",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Anglais LV1",
        type: "Devoir",
        date: "27 Mars 2026",
        sujet: "Présentation orale",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Sciences",
        type: "Examen",
        date: "03 Avr. 2026",
        sujet: "La cellule vivante",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Français",
        type: "Examen",
        date: "17 Mars 2026",
        sujet: "Commentaire de texte",
        statut: "done",
        note: 14,
      },
      {
        matiere: "Histoire-Géo",
        type: "Devoir",
        date: "11 Mars 2026",
        sujet: "L'Antiquité grecque",
        statut: "done",
        note: 13,
      },
      {
        matiere: "Espagnol LV2",
        type: "Devoir",
        date: "06 Mars 2026",
        sujet: "Conjugaison au présent",
        statut: "done",
        note: 16,
      },
    ],
  },
  moussa: {
    nom: "Moussa DIALLO",
    emoji: "👦🏿",
    classe: "5ème - A",
    examens: [
      {
        matiere: "Mathématiques",
        type: "Examen",
        date: "29 Mars 2026",
        sujet: "Géométrie : triangles",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Physique Chimie",
        type: "Devoir",
        date: "31 Mars 2026",
        sujet: "Les états de la matière",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Français",
        type: "Examen",
        date: "04 Avr. 2026",
        sujet: "Analyse grammaticale",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Histoire-Géo",
        type: "Examen",
        date: "16 Mars 2026",
        sujet: "Le Moyen Âge",
        statut: "done",
        note: 8,
      },
      {
        matiere: "Mathématiques",
        type: "Devoir",
        date: "09 Mars 2026",
        sujet: "Calcul littéral",
        statut: "done",
        note: 7,
      },
      {
        matiere: "Anglais LV1",
        type: "Devoir",
        date: "03 Mars 2026",
        sujet: "Vocabulaire thématique",
        statut: "done",
        note: 7,
      },
    ],
  },
  ibrahim: {
    nom: "Ibrahim COULIBALY",
    emoji: "👦🏾",
    classe: "CM1 - B",
    examens: [
      {
        matiere: "Mathématiques",
        type: "Devoir",
        date: "26 Mars 2026",
        sujet: "Mesures et conversions",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Français",
        type: "Examen",
        date: "30 Mars 2026",
        sujet: "Orthographe et conjugaison",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Sciences",
        type: "Devoir",
        date: "02 Avr. 2026",
        sujet: "Les plantes et la photosynthèse",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Mathématiques",
        type: "Examen",
        date: "19 Mars 2026",
        sujet: "Multiplication et division",
        statut: "done",
        note: 14,
      },
      {
        matiere: "Histoire",
        type: "Devoir",
        date: "13 Mars 2026",
        sujet: "La Gaule romaine",
        statut: "done",
        note: 14,
      },
      {
        matiere: "Anglais",
        type: "Devoir",
        date: "07 Mars 2026",
        sujet: "Les couleurs et les chiffres",
        statut: "done",
        note: 13,
      },
    ],
  },
  clarisse: {
    nom: "Clarisse BAMBA",
    emoji: "👧🏽",
    classe: "CP - A",
    examens: [
      {
        matiere: "Lecture",
        type: "Évaluation",
        date: "27 Mars 2026",
        sujet: "Lecture syllabique",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Calcul",
        type: "Évaluation",
        date: "28 Mars 2026",
        sujet: "Chiffres jusqu'à 20",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Écriture",
        type: "Devoir",
        date: "01 Avr. 2026",
        sujet: "Copie de phrases simples",
        statut: "upcoming",
        note: null,
      },
      {
        matiere: "Lecture",
        type: "Évaluation",
        date: "14 Mars 2026",
        sujet: "Reconnaissance des lettres",
        statut: "done",
        note: 19,
      },
      {
        matiere: "Calcul",
        type: "Évaluation",
        date: "08 Mars 2026",
        sujet: "Additions simples",
        statut: "done",
        note: 17,
      },
      {
        matiere: "Éveil",
        type: "Devoir",
        date: "02 Mars 2026",
        sujet: "Les saisons",
        statut: "done",
        note: 19,
      },
    ],
  },
};

/* ── Couleurs par matière ── */
const PALETTE_EXAM = [
  ["MATHÉMATIQUES", "#dbeafe", "#1d4ed8"],
  ["MATH", "#dbeafe", "#1d4ed8"],
  ["FRANÇAIS", "#fce7f3", "#be185d"],
  ["ANGLAIS", "#dcfce7", "#15803d"],
  ["ESPAGNOL", "#f3e8ff", "#7e22ce"],
  ["SCIENCES", "#e0f2fe", "#0369a1"],
  ["HISTOIRE", "#fef9c3", "#854d0e"],
  ["GÉOGRAPHIE", "#fef9c3", "#854d0e"],
  ["PHYSIQUE", "#ffedd5", "#9a3412"],
  ["LECTURE", "#dbeafe", "#1d4ed8"],
  ["ÉCRITURE", "#fce7f3", "#be185d"],
  ["CALCUL", "#dcfce7", "#15803d"],
  ["ÉVEIL", "#fef9c3", "#854d0e"],
  ["DÉCOUVERTE", "#ccfbf1", "#0f766e"],
];

function getExamStyle(matiere) {
  const upper = matiere.toUpperCase();
  for (const [key, bg, color] of PALETTE_EXAM) {
    if (upper.includes(key)) return { bg, color };
  }
  return { bg: "#f3f4f6", color: "#6b7280" };
}

function noteClass(n) {
  return n >= 14 ? "note-good" : n >= 10 ? "note-mid" : "note-bad";
}

/* ══ Rendu du tableau de bord examens élève ══ */
function renderExamens(id) {
  const e = elevesExamens[id];
  if (!e) return;

  const upcoming = e.examens.filter((x) => x.statut === "upcoming");
  const done = e.examens.filter((x) => x.statut === "done");

  /* Résumé stats */
  const moy = done.length
    ? (done.reduce((s, x) => s + x.note, 0) / done.length).toFixed(1)
    : "—";

  const statsHtml = `
    <div class="exam-stats-row">
      <div class="exam-stat-card">
        <div class="exam-stat-icon" style="background:#fff8e1">📅</div>
        <div>
          <div class="exam-stat-label">À venir</div>
          <div class="exam-stat-value">${upcoming.length}</div>
        </div>
      </div>
      <div class="exam-stat-card">
        <div class="exam-stat-icon" style="background:#e8f5e9">✅</div>
        <div>
          <div class="exam-stat-label">Passés</div>
          <div class="exam-stat-value">${done.length}</div>
        </div>
      </div>
      <div class="exam-stat-card">
        <div class="exam-stat-icon" style="background:#e3f2fd">📊</div>
        <div>
          <div class="exam-stat-label">Moyenne</div>
          <div class="exam-stat-value">${moy !== "—" ? moy + "/20" : "—"}</div>
        </div>
      </div>
    </div>`;

  /* Examens à venir */
  const upcomingHtml = upcoming.length
    ? upcoming
        .map((x) => {
          const { bg, color } = getExamStyle(x.matiere);
          return `
          <div class="exam-card upcoming-card">
            <div class="exam-card-left" style="background:${bg};border-left:4px solid ${color}">
              <div class="exam-type-badge" style="color:${color};background:${bg}">${x.type}</div>
              <div class="exam-matiere" style="color:${color}">${x.matiere}</div>
              <div class="exam-sujet">${x.sujet}</div>
            </div>
            <div class="exam-card-right">
              <div class="exam-date-label">📅 ${x.date}</div>
              <div class="exam-statut-badge upcoming-badge">À venir</div>
            </div>
          </div>`;
        })
        .join("")
    : `<div class="exam-empty">Aucun examen à venir 🎉</div>`;

  /* Examens passés */
  const doneHtml = done.length
    ? done
        .map((x) => {
          const { bg, color } = getExamStyle(x.matiere);
          const nc = noteClass(x.note);
          return `
          <div class="exam-card done-card">
            <div class="exam-card-left" style="background:${bg};border-left:4px solid ${color}">
              <div class="exam-type-badge" style="color:${color};background:${bg}">${x.type}</div>
              <div class="exam-matiere" style="color:${color}">${x.matiere}</div>
              <div class="exam-sujet">${x.sujet}</div>
            </div>
            <div class="exam-card-right">
              <div class="exam-date-label">📅 ${x.date}</div>
              <span class="note-pill ${nc}">${x.note}/20</span>
            </div>
          </div>`;
        })
        .join("")
    : `<div class="exam-empty">Aucun examen passé.</div>`;

  document.getElementById("dynamicZone").innerHTML = `
    ${statsHtml}

    <div class="exam-section">
      <div class="exam-section-title">📅 Examens et devoirs à venir</div>
      <div class="exam-list">${upcomingHtml}</div>
    </div>

    <div class="exam-section">
      <div class="exam-section-title">✅ Examens et devoirs passés</div>
      <div class="exam-list">${doneHtml}</div>
    </div>`;
}

/* ══ Sélection élève ══ */
function onKidSelect(val) {
  const wrap = document.getElementById("kidSelectWrap");
  const staticZone = document.getElementById("staticContent");
  const dynZone = document.getElementById("dynamicZone");
  const banner = document.getElementById("eleve-banner");

  if (val && elevesExamens[val]) {
    currentEleve = val;
    wrap.classList.add("selected");

    const e = elevesExamens[val];
    document.getElementById("eleve-emoji").textContent = e.emoji;
    document.getElementById("eleve-nom").textContent = e.nom;
    document.getElementById("eleve-classe").textContent = "🏫 " + e.classe;

    banner.style.display = "flex";
    staticZone.style.display = "none";
    dynZone.style.display = "block";

    renderExamens(val);
  } else {
    currentEleve = null;
    wrap.classList.remove("selected");

    banner.style.display = "none";
    staticZone.style.display = "";
    dynZone.style.display = "none";
    dynZone.innerHTML = "";
  }
}

let currentEleve = null;
