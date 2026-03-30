/* ============================
   DONNÉES DE POINTAGES PAR ÉLÈVE
============================ */
const elevesPointage = {
  malicka: {
    nom: "Malicka TARNAGADA",
    emoji: "👧",
    classe: "CM2 - A",
    statut: "good",
    statutLabel: "Excellent",
    stats: { present: 18, retard: 1, absent: 0, taux: "97%" },
    pointages: [
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Cours de Physique-Chimie",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "09:05 - 10:00",
        statut: "present",
      },
      {
        cours: "Cours de Physique-Chimie",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "08:05 - 09:00",
        statut: "retard",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "15:05 - 16:00",
        statut: "present",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "14:05 - 15:00",
        statut: "present",
      },
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "10/02/2026",
        heure: "13:05 - 14:00",
        statut: "present",
      },
      {
        cours: "Finalisation du projet",
        prof: "Sacha Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#fce4ec,#f48fb1)",
        date: "10/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "09:05 - 10:00",
        statut: "present",
      },
    ],
  },
  malek: {
    nom: "Malek TARNAGADA",
    emoji: "👦",
    classe: "CE2 - B",
    statut: "warn",
    statutLabel: "À surveiller",
    stats: { present: 14, retard: 3, absent: 2, taux: "82%" },
    pointages: [
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "10:05 - 11:00",
        statut: "retard",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "09:05 - 10:00",
        statut: "absent",
      },
      {
        cours: "Cours de Sciences",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "11/02/2026",
        heure: "08:05 - 09:00",
        statut: "retard",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "15:05 - 16:00",
        statut: "present",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "14:05 - 15:00",
        statut: "absent",
      },
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "10/02/2026",
        heure: "13:05 - 14:00",
        statut: "retard",
      },
      {
        cours: "Finalisation du projet",
        prof: "Sacha Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#fce4ec,#f48fb1)",
        date: "10/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "09:05 - 10:00",
        statut: "present",
      },
    ],
  },
  aminata: {
    nom: "Aminata KONE",
    emoji: "👧🏾",
    classe: "6ème - C",
    statut: "good",
    statutLabel: "Très bien",
    stats: { present: 17, retard: 2, absent: 0, taux: "95%" },
    pointages: [
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Cours de Sciences",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "11/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Cours de Physique-Chimie",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "09:05 - 10:00",
        statut: "retard",
      },
      {
        cours: "Cours de Physique-Chimie",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "08:05 - 09:00",
        statut: "present",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "15:05 - 16:00",
        statut: "present",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "14:05 - 15:00",
        statut: "present",
      },
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "10/02/2026",
        heure: "13:05 - 14:00",
        statut: "present",
      },
      {
        cours: "Finalisation du projet",
        prof: "Sacha Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#fce4ec,#f48fb1)",
        date: "10/02/2026",
        heure: "11:05 - 12:00",
        statut: "retard",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "09:05 - 10:00",
        statut: "present",
      },
    ],
  },
  moussa: {
    nom: "Moussa DIALLO",
    emoji: "👦🏿",
    classe: "5ème - A",
    statut: "alert",
    statutLabel: "⚠ Alerte",
    stats: { present: 10, retard: 3, absent: 6, taux: "71%" },
    pointages: [
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "11:05 - 12:00",
        statut: "absent",
      },
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "10:05 - 11:00",
        statut: "absent",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "09:05 - 10:00",
        statut: "retard",
      },
      {
        cours: "Cours de Sciences",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "11/02/2026",
        heure: "08:05 - 09:00",
        statut: "absent",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "15:05 - 16:00",
        statut: "present",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "14:05 - 15:00",
        statut: "absent",
      },
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "10/02/2026",
        heure: "13:05 - 14:00",
        statut: "present",
      },
      {
        cours: "Finalisation du projet",
        prof: "Sacha Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#fce4ec,#f48fb1)",
        date: "10/02/2026",
        heure: "11:05 - 12:00",
        statut: "retard",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "10:05 - 11:00",
        statut: "absent",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "09:05 - 10:00",
        statut: "retard",
      },
    ],
  },
  ibrahim: {
    nom: "Ibrahim COULIBALY",
    emoji: "👦🏾",
    classe: "CM1 - B",
    statut: "good",
    statutLabel: "Bien",
    stats: { present: 16, retard: 2, absent: 1, taux: "90%" },
    pointages: [
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Cours de Physique-Chimie",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "09:05 - 10:00",
        statut: "retard",
      },
      {
        cours: "Cours de Physique-Chimie",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "08:05 - 09:00",
        statut: "present",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "15:05 - 16:00",
        statut: "present",
      },
      {
        cours: "Cours de Philosophie",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "14:05 - 15:00",
        statut: "absent",
      },
      {
        cours: "Cours de Mathématiques",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "10/02/2026",
        heure: "13:05 - 14:00",
        statut: "present",
      },
      {
        cours: "Finalisation du projet",
        prof: "Sacha Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#fce4ec,#f48fb1)",
        date: "10/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "10:05 - 11:00",
        statut: "retard",
      },
      {
        cours: "Cours de Français",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "09:05 - 10:00",
        statut: "present",
      },
    ],
  },
  clarisse: {
    nom: "Clarisse BAMBA",
    emoji: "👧🏽",
    classe: "CP - A",
    statut: "good",
    statutLabel: "Excellent",
    stats: { present: 19, retard: 0, absent: 0, taux: "99%" },
    pointages: [
      {
        cours: "Lecture",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Lecture",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "11/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Calcul",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "09:05 - 10:00",
        statut: "present",
      },
      {
        cours: "Calcul",
        prof: "Antoine Auclair",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#d4e9ff,#90caf9)",
        date: "11/02/2026",
        heure: "08:05 - 09:00",
        statut: "present",
      },
      {
        cours: "Éveil",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "15:05 - 16:00",
        statut: "present",
      },
      {
        cours: "Éveil",
        prof: "Hector Rey",
        avatar: "👨",
        couleur: "linear-gradient(135deg,#e8f5e9,#a5d6a7)",
        date: "10/02/2026",
        heure: "14:05 - 15:00",
        statut: "present",
      },
      {
        cours: "Écriture",
        prof: "Sacha Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#fce4ec,#f48fb1)",
        date: "10/02/2026",
        heure: "13:05 - 14:00",
        statut: "present",
      },
      {
        cours: "Dessin",
        prof: "Sacha Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#fce4ec,#f48fb1)",
        date: "10/02/2026",
        heure: "11:05 - 12:00",
        statut: "present",
      },
      {
        cours: "Lecture",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "10:05 - 11:00",
        statut: "present",
      },
      {
        cours: "Lecture",
        prof: "Isabelle Dubois",
        avatar: "👩",
        couleur: "linear-gradient(135deg,#ffecd2,#fcb69f)",
        date: "10/02/2026",
        heure: "09:05 - 10:00",
        statut: "present",
      },
    ],
  },
};

function badgeHTML(statut) {
  if (statut === "present") {
    return `<span class="badge badge-present">Présent</span>`;
  } else if (statut === "retard") {
    return `<div class="badge-wrapper">
              <span class="badge badge-retard">En retard</span>
              <span class="triangle-icon">⚠️</span>
            </div>`;
  } else {
    return `<div class="badge-wrapper">
              <span class="badge badge-absent">Absent</span>
              <span class="triangle-icon">⚠️</span>
            </div>`;
  }
}

function renderDefault() {
  document.getElementById("dynamicZone").innerHTML = `
    <div class="table-card">
      <table>
        <thead>
          <tr><th>Cours</th><th>Professeurs</th><th>Date</th><th>Heures</th><th>Statut</th></tr>
        </thead>
        <tbody>
          <tr><td class="course-name">Cours de Français</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#ffecd2,#fcb69f)">👩</div><span class="prof-name">Isabelle Dubois</span></div></td><td class="date-cell">11/02/2026</td><td class="hours">11:05 - 12:00</td><td><span class="badge badge-present">Présent</span></td></tr>
          <tr><td class="course-name">Cours de Français</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#ffecd2,#fcb69f)">👩</div><span class="prof-name">Isabelle Dubois</span></div></td><td class="date-cell">11/02/2026</td><td class="hours">10:05 - 11:00</td><td><span class="badge badge-present">Présent</span></td></tr>
          <tr><td class="course-name">Cours de Physique - chimie</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#d4e9ff,#90caf9)">👨</div><span class="prof-name">Antoine Auclair</span></div></td><td class="date-cell">11/02/2026</td><td class="hours">09:05 - 10:00</td><td><span class="badge badge-present">Présent</span></td></tr>
          <tr><td class="course-name">Cours de Physique - chimie</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#d4e9ff,#90caf9)">👨</div><span class="prof-name">Antoine Auclair</span></div></td><td class="date-cell">11/02/2026</td><td class="hours">08:05 - 09:00</td><td><div class="badge-wrapper"><span class="badge badge-retard">En retard</span><span class="triangle-icon">⚠️</span></div></td></tr>
          <tr><td class="course-name">Cours de Philosophie</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#e8f5e9,#a5d6a7)">👨</div><span class="prof-name">Hector Rey</span></div></td><td class="date-cell">10/02/2026</td><td class="hours">15:05 - 16:00</td><td><span class="badge badge-present">Présent</span></td></tr>
          <tr><td class="course-name">Cours de Philosophie</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#e8f5e9,#a5d6a7)">👨</div><span class="prof-name">Hector Rey</span></div></td><td class="date-cell">10/02/2026</td><td class="hours">14:05 - 15:00</td><td><span class="badge badge-present">Présent</span></td></tr>
          <tr><td class="course-name">Cours de Mathématiques</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#d4e9ff,#90caf9)">👨</div><span class="prof-name">Antoine Auclair</span></div></td><td class="date-cell">10/02/2026</td><td class="hours">13:05 - 14:00</td><td><span class="badge badge-present">Présent</span></td></tr>
          <tr><td class="course-name">Finalisation du projet</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#fce4ec,#f48fb1)">👩</div><span class="prof-name">Sacha Dubois</span></div></td><td class="date-cell">10/02/2026</td><td class="hours">11:05 - 12:00</td><td><div class="badge-wrapper"><span class="badge badge-absent">Absent</span><span class="triangle-icon">⚠️</span></div></td></tr>
          <tr><td class="course-name">Cours de Français</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#ffecd2,#fcb69f)">👩</div><span class="prof-name">Isabelle Dubois</span></div></td><td class="date-cell">10/02/2026</td><td class="hours">10:05 - 11:00</td><td><div class="badge-wrapper"><span class="badge badge-retard">En retard</span><span class="triangle-icon">⚠️</span></div></td></tr>
          <tr><td class="course-name">Cours de Français</td><td><div class="prof-cell"><div class="prof-avatar" style="background:linear-gradient(135deg,#ffecd2,#fcb69f)">👩</div><span class="prof-name">Isabelle Dubois</span></div></td><td class="date-cell">10/02/2026</td><td class="hours">09:05 - 10:00</td><td><div class="badge-wrapper"><span class="badge badge-retard">En retard</span><span class="triangle-icon">⚠️</span></div></td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderPointage(id) {
  const e = elevesPointage[id];

  const sc =
    e.statut === "good"
      ? "badge-good"
      : e.statut === "warn"
        ? "badge-warn"
        : "badge-alert";

  const bgAv =
    e.statut === "good"
      ? "#e8f5e9"
      : e.statut === "warn"
        ? "#fff8e1"
        : "#ffebee";

  const rows = e.pointages
    .map(
      (p) => `
    <tr>
      <td class="course-name">${p.cours}</td>
      <td><div class="prof-cell"><div class="prof-avatar" style="background:${p.couleur}">${p.avatar}</div><span class="prof-name">${p.prof}</span></div></td>
      <td class="date-cell">${p.date}</td>
      <td class="hours">${p.heure}</td>
      <td>${badgeHTML(p.statut)}</td>
    </tr>`,
    )
    .join("");

  document.getElementById("dynamicZone").innerHTML = `
    <div class="student-banner">
      <div class="student-avatar-big" style="background:${bgAv}">${e.emoji}</div>
      <div style="flex:1;min-width:0">
        <div class="student-name-big">${e.nom}</div>
        <div class="student-meta">
          <span>🏫 ${e.classe}</span>
          <span>📊 Taux de présence : <strong>${e.stats.taux}</strong></span>
        </div>
      </div>
      <span class="student-badge ${sc}">${e.statutLabel}</span>
    </div>

    <div class="presence-stats">
      <div class="pstat-card"><div class="pstat-icon green">✅</div><div><div class="pstat-label">Présences</div><div class="pstat-value">${e.stats.present}</div><div class="pstat-sub">cours ce mois</div></div></div>
      <div class="pstat-card"><div class="pstat-icon yellow">⏰</div><div><div class="pstat-label">Retards</div><div class="pstat-value">${e.stats.retard}</div><div class="pstat-sub">signalés</div></div></div>
      <div class="pstat-card"><div class="pstat-icon red">❌</div><div><div class="pstat-label">Absences</div><div class="pstat-value">${e.stats.absent}</div><div class="pstat-sub">non justifiées</div></div></div>
      <div class="pstat-card"><div class="pstat-icon blue">📊</div><div><div class="pstat-label">Taux global</div><div class="pstat-value">${e.stats.taux}</div><div class="pstat-sub">de présence</div></div></div>
    </div>

    <div class="table-card">
      <table>
        <thead><tr><th>Cours</th><th>Professeurs</th><th>Date</th><th>Heures</th><th>Statut</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

window.onload = function () {
  var sel = document.getElementById("kidSelect");
  var wrap = document.getElementById("kidSelectWrap");
  if (!sel || !wrap) return;

  sel.addEventListener("change", function () {
    var val = this.value;
    if (val && elevesPointage[val]) {
      wrap.classList.add("selected");
      renderPointage(val);
    } else {
      wrap.classList.remove("selected");
      renderDefault();
    }
  });
};
