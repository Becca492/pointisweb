const eleves = {
  malicka: {
    nom: "Malicka TARNAGADA",
    emoji: "👧",
    classe: "CM2 - A",
    age: "10 ans",
    statut: "good",
    statutLabel: "Excellent",
    presence: 97,
    cours: 20,
    moy: 16.4,
    alertes: 0,
    pch: "↑ +2% ce mois",
    mLabel: "Très bon",
    com: "Excellent niveau général, continue comme ça !",
    notes: [
      { m: "Mathématiques", n: 17, c: 3 },
      { m: "Français", n: 16, c: 3 },
      { m: "Sciences", n: 18, c: 2 },
      { m: "Histoire-Géo", n: 15, c: 2 },
      { m: "Anglais", n: 14, c: 1 },
    ],
    cv: {
      s1: [60, 70, 50],
      s2: [45, 50, 35],
      s3: [70, 60, 55],
      s4: [30, 40, 20],
    },
  },
  malek: {
    nom: "Malek TARNAGADA",
    emoji: "👦",
    classe: "CE2 - B",
    age: "8 ans",
    statut: "warn",
    statutLabel: "À surveiller",
    presence: 82,
    cours: 18,
    moy: 11.2,
    alertes: 2,
    pch: "↓ -5% ce mois",
    mLabel: "Passable",
    com: "Des efforts nécessaires en Maths et Histoire.",
    notes: [
      { m: "Mathématiques", n: 10, c: 3 },
      { m: "Français", n: 12, c: 3 },
      { m: "Sciences", n: 13, c: 2 },
      { m: "Histoire-Géo", n: 9, c: 2 },
      { m: "Anglais", n: 11, c: 1 },
    ],
    cv: {
      s1: [100, 90, 100],
      s2: [80, 85, 90],
      s3: [95, 75, 110],
      s4: [70, 80, 80],
    },
  },
  aminata: {
    nom: "Aminata KONE",
    emoji: "👧🏾",
    classe: "6ème - C",
    age: "11 ans",
    statut: "good",
    statutLabel: "Très bien",
    presence: 95,
    cours: 22,
    moy: 14.8,
    alertes: 0,
    pch: "↑ stable",
    mLabel: "Très bon",
    com: "Bonne élève, régulière et sérieuse.",
    notes: [
      { m: "Mathématiques", n: 15, c: 4 },
      { m: "Français", n: 14, c: 4 },
      { m: "Sciences", n: 16, c: 3 },
      { m: "Histoire-Géo", n: 13, c: 2 },
      { m: "Anglais", n: 16, c: 2 },
    ],
    cv: {
      s1: [75, 60, 60],
      s2: [50, 55, 45],
      s3: [65, 50, 50],
      s4: [40, 45, 35],
    },
  },
  moussa: {
    nom: "Moussa DIALLO",
    emoji: "👦🏿",
    classe: "5ème - A",
    age: "12 ans",
    statut: "alert",
    statutLabel: "⚠ Alerte",
    presence: 71,
    cours: 20,
    moy: 8.3,
    alertes: 4,
    pch: "↓ -12% ce mois",
    mLabel: "Insuffisant",
    com: "Situation préoccupante. Suivi individuel recommandé.",
    notes: [
      { m: "Mathématiques", n: 7, c: 4 },
      { m: "Français", n: 9, c: 4 },
      { m: "Sciences", n: 10, c: 3 },
      { m: "Histoire-Géo", n: 8, c: 2 },
      { m: "Anglais", n: 7, c: 2 },
    ],
    cv: {
      s1: [130, 120, 140],
      s2: [110, 115, 120],
      s3: [120, 105, 130],
      s4: [100, 110, 115],
    },
  },
  ibrahim: {
    nom: "Ibrahim COULIBALY",
    emoji: "👦🏾",
    classe: "CM1 - B",
    age: "9 ans",
    statut: "good",
    statutLabel: "Bien",
    presence: 90,
    cours: 19,
    moy: 13.5,
    alertes: 1,
    pch: "↑ +1% ce mois",
    mLabel: "Bien",
    com: "Bon niveau, quelques efforts à fournir en Sciences.",
    notes: [
      { m: "Mathématiques", n: 14, c: 3 },
      { m: "Français", n: 13, c: 3 },
      { m: "Sciences", n: 12, c: 2 },
      { m: "Histoire-Géo", n: 14, c: 2 },
      { m: "Anglais", n: 13, c: 1 },
    ],
    cv: {
      s1: [85, 75, 90],
      s2: [65, 70, 75],
      s3: [75, 65, 80],
      s4: [55, 60, 65],
    },
  },
  clarisse: {
    nom: "Clarisse BAMBA",
    emoji: "👧🏽",
    classe: "CP - A",
    age: "6 ans",
    statut: "good",
    statutLabel: "Excellent",
    presence: 99,
    cours: 16,
    moy: 18.1,
    alertes: 0,
    pch: "↑ 100% présence",
    mLabel: "Excellent",
    com: "Élève brillante, très à l'aise dans toutes les matières.",
    notes: [
      { m: "Lecture", n: 19, c: 4 },
      { m: "Écriture", n: 18, c: 4 },
      { m: "Calcul", n: 17, c: 3 },
      { m: "Éveil", n: 19, c: 2 },
      { m: "Dessin", n: 18, c: 1 },
    ],
    cv: {
      s1: [30, 25, 20],
      s2: [25, 20, 18],
      s3: [22, 18, 15],
      s4: [18, 15, 12],
    },
  },
};

function noteClass(n) {
  return n >= 14 ? "note-good" : n >= 10 ? "note-mid" : "note-bad";
}
function noteColor(n) {
  return n >= 14 ? "#4caf50" : n >= 10 ? "#ffc107" : "#f44336";
}

function buildSVG(cv) {
  const W = 400,
    H = 160;
  const xs = [50, 150, 250, 350];
  const series = ["s1", "s2", "s3", "s4"];
  const all = series.flatMap((s) => cv[s]);
  const maxV = Math.max(...all) || 1;
  const ny = (v) => H - 10 - (v / maxV) * (H - 30);
  const cols = ["#cccccc", "#aaaaaa", "#E53935"];
  const fills = [
    "rgba(204,204,204,0.25)",
    "rgba(170,170,170,0.2)",
    "rgba(229,57,53,0.15)",
  ];

  let svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">`;
  [20, 55, 90, 125].forEach((y) => {
    svg += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#e8e8ee" stroke-width="1"/>`;
  });
  [0, 1, 2].forEach((ci) => {
    const pts = series.map((s, si) => [xs[si], ny(cv[s][ci])]);
    const pStr = pts.map((p) => p.join(",")).join(" ");
    const fStr = pStr + ` ${xs[3]},${H} ${xs[0]},${H}`;
    svg += `<polygon points="${fStr}" fill="${fills[ci]}"/>`;
    svg += `<polyline points="${pStr}" fill="none" stroke="${cols[ci]}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
    pts.forEach(([x, y]) => {
      svg += `<circle cx="${x}" cy="${y}" r="4" fill="${cols[ci]}"/>`;
    });
  });
  svg += `</svg>`;
  return svg;
}

function renderWelcome() {
  document.getElementById("staticContent").style.display = "";
  document.getElementById("dynamicZone").style.display = "none";
  document.getElementById("dynamicZone").innerHTML = "";
}

function renderDashboard(id) {
  const e = eleves[id];

  document.getElementById("staticContent").style.display = "none";

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
  const pcCl = e.pch.startsWith("↑") ? "up" : "dn";
  const mCl = e.moy >= 14 ? "up" : e.moy >= 10 ? "neu" : "dn";

  const notesRows = e.notes
    .map(
      (n) => `
    <tr>
      <td style="font-weight:700">${n.m}</td>
      <td style="color:var(--muted)">Coeff. ${n.c}</td>
      <td>
        <div class="progress-wrap">
          <div class="progress-bar">
            <div class="progress-fill" style="width:${(n.n / 20) * 100}%; background:${noteColor(n.n)}"></div>
          </div>
          <span class="note-pill ${noteClass(n.n)}">${n.n}/20</span>
        </div>
      </td>
    </tr>`,
    )
    .join("");

  const zone = document.getElementById("dynamicZone");
  zone.style.display = "block";
  zone.innerHTML = `
    <div class="student-banner">
      <div class="student-avatar-big" style="background:${bgAv}">${e.emoji}</div>
      <div style="flex:1; min-width:0">
        <div class="student-name-big">${e.nom}</div>
        <div class="student-meta">
          <span>🏫 ${e.classe}</span>
          <span>🎂 ${e.age}</span>
          <span>💬 ${e.com}</span>
        </div>
      </div>
      <span class="student-badge ${sc}">${e.statutLabel}</span>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-icon green">✅</div>
        <div>
          <div class="stat-label">Présences</div>
          <div class="stat-value">${e.presence}%</div>
          <div class="stat-change ${pcCl}">${e.pch}</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue">📘</div>
        <div>
          <div class="stat-label">Cours suivis</div>
          <div class="stat-value">${e.cours}</div>
          <div class="stat-change neu">ce trimestre</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon yellow">📊</div>
        <div>
          <div class="stat-label">Moyenne</div>
          <div class="stat-value">${e.moy}/20</div>
          <div class="stat-change ${mCl}">${e.mLabel}</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon ${e.alertes > 0 ? "red" : "green"}">${e.alertes > 0 ? "⚠️" : "✅"}</div>
        <div>
          <div class="stat-label">Alertes</div>
          <div class="stat-value">${e.alertes}</div>
          <div class="stat-change ${e.alertes > 0 ? "dn" : "up"}">
            ${e.alertes > 0 ? e.alertes + " à traiter" : "Aucun problème"}
          </div>
        </div>
      </div>
    </div>

    <div class="grid-row">
      <div class="chart-card">
        <div class="card-header">
          <div class="card-title">Performance de ${e.nom.split(" ")[0]}</div>
          <div class="chart-legend">
            <span><span class="legend-dot" style="background:#ccc"></span>${e.notes[0].m}</span>
            <span><span class="legend-dot" style="background:#aaa"></span>${e.notes[1].m}</span>
            <span><span class="legend-dot" style="background:#E53935"></span>${e.notes[2].m}</span>
          </div>
        </div>
        <div class="chart-area">${buildSVG(e.cv)}</div>
        <div class="chart-labels">
          <span>SEM 1</span><span>SEM 2</span><span>SEM 3</span><span>SEM 4</span>
        </div>
      </div>

      <div class="events-card">
        <div class="card-title" style="margin-bottom:2px">Événements</div>
        <div class="event-item">
          <div class="event-thumb">🏫</div>
          <div class="event-info">
            <div class="event-title">Sortie scolaire</div>
            <div class="event-desc">Sortie à la fondation Donwahi deux plateau</div>
          </div>
        </div>
        <div class="event-item highlighted">
          <div class="event-thumb">🌍</div>
          <div class="event-info">
            <div class="event-title">Journée culturelle</div>
            <div class="event-desc">Journée d'échange culturelle ce vendredi</div>
          </div>
        </div>
        <div class="event-item">
          <div class="event-thumb">📚</div>
          <div class="event-info">
            <div class="event-title">Journée éducative</div>
            <div class="event-desc">Nos élèves seront au case du pollier au vallon</div>
          </div>
        </div>
        <div class="pagination">
          <button class="page-btn">‹</button>
          <button class="page-btn">1</button>
          <button class="page-btn active">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">›</button>
        </div>
      </div>
    </div>

    <div class="notes-card">
      <div class="card-title">Bulletin de notes — ${e.nom}</div>
      <table class="notes-table">
        <thead>
          <tr>
            <th>Matière</th>
            <th>Coefficient</th>
            <th>Note &amp; progression</th>
          </tr>
        </thead>
        <tbody>${notesRows}</tbody>
      </table>
    </div>`;
}

function onKidSelect(val) {
  const wrap = document.getElementById("kidSelectWrap");
  if (val && eleves[val]) {
    wrap.classList.add("selected");
    renderDashboard(val);
  } else {
    wrap.classList.remove("selected");
    renderWelcome();
  }
}

function setTab(el) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
}

renderWelcome();
