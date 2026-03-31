/* ══════════════════════════════════════════════════════════════
   KIDS.JS
   - Par défaut   : liste statique des kids + accompagnateurs
   - Élève choisi : fiche complète de l'élève sélectionné
   ══════════════════════════════════════════════════════════════ */

const elevesKids = {
  malicka: {
    nom: "Malicka TARNAGADA",
    prenom: "Malicka",
    nomFamille: "TARNAGADA",
    emoji: "👧🏾",
    classe: "CM2 - A",
    age: "10 ans",
    dateNaissance: "12 Janvier 2016",
    ecole: "École Primaire Les Palmiers",
    statut: "good",
    statutLabel: "Excellent",
    bgColor: "#e8f5e9",
    transport: "Bus scolaire — Ligne 3",
    accompagnateur: {
      nom: "Manuella TARNAGADA",
      emoji: "👩🏾",
      role: "Accompagnateur Veolia",
    },
    contacts: [
      {
        nom: "Seny TARNAGADA",
        lien: "Père",
        tel: "+225 07 00 11 22",
        emoji: "👨🏾",
      },
      {
        nom: "Aïcha TARNAGADA",
        lien: "Mère",
        tel: "+225 07 00 33 44",
        emoji: "👩🏾",
      },
    ],
    infos: [
      { label: "Groupe sanguin", valeur: "O+" },
      { label: "Allergie", valeur: "Aucune" },
      { label: "Médecin traitant", valeur: "Dr. Koné — Cocody" },
    ],
  },
  malek: {
    nom: "Malek TARNAGADA",
    prenom: "Malek",
    nomFamille: "TARNAGADA",
    emoji: "👦🏿",
    classe: "CE2 - B",
    age: "8 ans",
    dateNaissance: "03 Avril 2018",
    ecole: "École Primaire Les Palmiers",
    statut: "warn",
    statutLabel: "À surveiller",
    bgColor: "#fff8e1",
    transport: "Bus scolaire — Ligne 3",
    accompagnateur: {
      nom: "Manuella TARNAGADA",
      emoji: "👩🏾",
      role: "Accompagnateur Veolia",
    },
    contacts: [
      {
        nom: "Seny TARNAGADA",
        lien: "Père",
        tel: "+225 07 00 11 22",
        emoji: "👨🏾",
      },
      {
        nom: "Aïcha TARNAGADA",
        lien: "Mère",
        tel: "+225 07 00 33 44",
        emoji: "👩🏾",
      },
    ],
    infos: [
      { label: "Groupe sanguin", valeur: "A+" },
      { label: "Allergie", valeur: "Arachides" },
      { label: "Médecin traitant", valeur: "Dr. Koné — Cocody" },
    ],
  },
  aminata: {
    nom: "Aminata KONE",
    prenom: "Aminata",
    nomFamille: "KONE",
    emoji: "👧🏾",
    classe: "6ème - C",
    age: "11 ans",
    dateNaissance: "18 Juillet 2015",
    ecole: "Collège Saint-Charles",
    statut: "good",
    statutLabel: "Très bien",
    bgColor: "#e8f5e9",
    transport: "Minibus école — Matin & Soir",
    accompagnateur: {
      nom: "Fatou KONE",
      emoji: "👩🏿",
      role: "Parent accompagnateur",
    },
    contacts: [
      {
        nom: "Ibrahim KONE",
        lien: "Père",
        tel: "+225 05 00 55 66",
        emoji: "👨🏿",
      },
      { nom: "Fatou KONE", lien: "Mère", tel: "+225 05 00 77 88", emoji: "👩🏿" },
    ],
    infos: [
      { label: "Groupe sanguin", valeur: "B+" },
      { label: "Allergie", valeur: "Aucune" },
      { label: "Médecin traitant", valeur: "Dr. Diallo — Plateau" },
    ],
  },
  moussa: {
    nom: "Moussa DIALLO",
    prenom: "Moussa",
    nomFamille: "DIALLO",
    emoji: "👦🏿",
    classe: "5ème - A",
    age: "12 ans",
    dateNaissance: "27 Septembre 2013",
    ecole: "Collège Saint-Charles",
    statut: "alert",
    statutLabel: "⚠ Alerte",
    bgColor: "#ffebee",
    transport: "À pied — Accompagné",
    accompagnateur: {
      nom: "Rokia DIALLO",
      emoji: "👩🏾",
      role: "Parent accompagnateur",
    },
    contacts: [
      {
        nom: "Seydou DIALLO",
        lien: "Père",
        tel: "+225 01 00 99 00",
        emoji: "👨🏾",
      },
      {
        nom: "Rokia DIALLO",
        lien: "Mère",
        tel: "+225 01 00 88 77",
        emoji: "👩🏾",
      },
    ],
    infos: [
      { label: "Groupe sanguin", valeur: "AB+" },
      { label: "Allergie", valeur: "Pénicilline" },
      { label: "Médecin traitant", valeur: "Dr. Touré — Yopougon" },
    ],
  },
  ibrahim: {
    nom: "Ibrahim COULIBALY",
    prenom: "Ibrahim",
    nomFamille: "COULIBALY",
    emoji: "👦🏾",
    classe: "CM1 - B",
    age: "9 ans",
    dateNaissance: "05 Mars 2017",
    ecole: "École Primaire Sainte-Marie",
    statut: "good",
    statutLabel: "Bien",
    bgColor: "#e8f5e9",
    transport: "Bus scolaire — Ligne 7",
    accompagnateur: {
      nom: "Awa COULIBALY",
      emoji: "👩🏽",
      role: "Parent accompagnateur",
    },
    contacts: [
      {
        nom: "Moussa COULIBALY",
        lien: "Père",
        tel: "+225 07 11 22 33",
        emoji: "👨🏽",
      },
      {
        nom: "Awa COULIBALY",
        lien: "Mère",
        tel: "+225 07 44 55 66",
        emoji: "👩🏽",
      },
    ],
    infos: [
      { label: "Groupe sanguin", valeur: "O-" },
      { label: "Allergie", valeur: "Aucune" },
      { label: "Médecin traitant", valeur: "Dr. Bamba — Marcory" },
    ],
  },
  clarisse: {
    nom: "Clarisse BAMBA",
    prenom: "Clarisse",
    nomFamille: "BAMBA",
    emoji: "👧🏽",
    classe: "CP - A",
    age: "6 ans",
    dateNaissance: "20 Octobre 2019",
    ecole: "École Primaire Les Cocotiers",
    statut: "good",
    statutLabel: "Excellent",
    bgColor: "#e8f5e9",
    transport: "Voiture parentale",
    accompagnateur: {
      nom: "Pauline BAMBA",
      emoji: "👩🏽",
      role: "Parent accompagnateur",
    },
    contacts: [
      { nom: "Jean BAMBA", lien: "Père", tel: "+225 05 77 88 99", emoji: "👨🏽" },
      {
        nom: "Pauline BAMBA",
        lien: "Mère",
        tel: "+225 05 66 77 88",
        emoji: "👩🏽",
      },
    ],
    infos: [
      { label: "Groupe sanguin", valeur: "A-" },
      { label: "Allergie", valeur: "Lactose" },
      { label: "Médecin traitant", valeur: "Dr. N'Guessan — Treichville" },
    ],
  },
};

/* ── Helpers ── */
function statutClass(s) {
  return s === "good"
    ? "badge-good"
    : s === "warn"
      ? "badge-warn"
      : "badge-alert";
}

/* ══ Rendu fiche élève ══ */
function renderKid(id) {
  const e = elevesKids[id];
  if (!e) return;

  const sc = statutClass(e.statut);

  const contactsHtml = e.contacts
    .map(
      (c) => `
    <div class="kid-contact-card">
      <div class="kid-contact-avatar">${c.emoji}</div>
      <div>
        <div class="kid-contact-nom">${c.nom}</div>
        <div class="kid-contact-lien">${c.lien}</div>
        <div class="kid-contact-tel">📞 ${c.tel}</div>
      </div>
    </div>`,
    )
    .join("");

  const infosHtml = e.infos
    .map(
      (i) => `
    <div class="kid-info-row">
      <span class="kid-info-label">${i.label}</span>
      <span class="kid-info-valeur">${i.valeur}</span>
    </div>`,
    )
    .join("");

  document.getElementById("dynamicZone").innerHTML = `

    <!-- Carte identité -->
    <div class="kid-profile-card">
      <div class="kid-profile-avatar" style="background:${e.bgColor}">${e.emoji}</div>
      <div class="kid-profile-info">
        <div class="kid-profile-nom">${e.nom}</div>
        <div class="kid-profile-meta">
          <span>🏫 ${e.classe}</span>
          <span>🎂 ${e.age} — ${e.dateNaissance}</span>
          <span>🏛️ ${e.ecole}</span>
        </div>
      </div>
      <span class="kid-statut-badge ${sc}">${e.statutLabel}</span>
    </div>

    <div class="kid-grid">

      <!-- Transport -->
      <div class="kid-section-card">
        <div class="kid-section-title">🚌 Transport</div>
        <div class="kid-transport-row">
          <div class="kid-transport-icon">🚌</div>
          <div>
            <div class="kid-transport-label">${e.transport}</div>
          </div>
        </div>
        <div class="kid-transport-row" style="margin-top:10px">
          <div class="kid-transport-icon">${e.accompagnateur.emoji}</div>
          <div>
            <div class="kid-transport-label">${e.accompagnateur.nom}</div>
            <div class="kid-transport-role">${e.accompagnateur.role}</div>
          </div>
        </div>
      </div>

      <!-- Infos médicales -->
      <div class="kid-section-card">
        <div class="kid-section-title">🩺 Informations médicales</div>
        <div class="kid-info-list">${infosHtml}</div>
      </div>

    </div>

    <!-- Contacts -->
    <div class="kid-section-card">
      <div class="kid-section-title">📞 Contacts d'urgence</div>
      <div class="kid-contacts-row">${contactsHtml}</div>
    </div>`;
}

/* ══ Sélection élève ══ */
let currentEleve = null;

function onKidSelect(val) {
  const wrap = document.getElementById("kidSelectWrap");
  const staticZone = document.getElementById("staticContent");
  const dynZone = document.getElementById("dynamicZone");
  const banner = document.getElementById("eleve-banner");

  if (val && elevesKids[val]) {
    currentEleve = val;
    wrap.classList.add("selected");

    const e = elevesKids[val];
    document.getElementById("eleve-emoji").textContent = e.emoji;
    document.getElementById("eleve-nom").textContent = e.nom;
    document.getElementById("eleve-classe").textContent = "🏫 " + e.classe;

    banner.style.display = "flex";
    staticZone.style.display = "none";
    dynZone.style.display = "block";

    renderKid(val);
  } else {
    currentEleve = null;
    wrap.classList.remove("selected");

    banner.style.display = "none";
    staticZone.style.display = "";
    dynZone.style.display = "none";
    dynZone.innerHTML = "";
  }
}
