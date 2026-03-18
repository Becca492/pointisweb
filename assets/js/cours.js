const labels = [
  "1er TRIMESTRE 2026",
  "2ème TRIMESTRE 2026",
  "3ème TRIMESTRE 2026",
];
const badgeClasses = ["badge-t1", "badge-t2", "badge-t3"];
const optClasses = ["active-t1", "active-t2", "active-t3"];

/* ── Ouvrir / fermer le dropdown ─────────────────────── */
function toggleDropdown() {
  document.getElementById("trim-dropdown").classList.toggle("open");
}

/* Fermer si clic en dehors */
document.addEventListener("click", function (e) {
  if (
    !e.target.closest("#trimestre-badge") &&
    !e.target.closest("#trim-dropdown")
  ) {
    document.getElementById("trim-dropdown").classList.remove("open");
  }
});

/* ── Changer de trimestre ────────────────────────────── */
function setTrimestre(n) {
  const i = n - 1;

  /* 1. Afficher le bon tableau */
  [1, 2, 3].forEach(function (t) {
    var table = document.getElementById("table-t" + t);
    if (table) table.style.display = t === n ? "" : "none";
  });

  /* 2. Mettre à jour le badge */
  var badge = document.getElementById("trimestre-badge");
  if (badge) {
    badge.innerHTML = labels[i] + " ▾";
  }

  /* 3. Mettre à jour les options du dropdown */
  document.querySelectorAll(".trim-option").forEach(function (opt, idx) {
    opt.className = "trim-option" + (idx === i ? " " + optClasses[idx] : "");
  });

  /* 4. Fermer le dropdown */
  document.getElementById("trim-dropdown").classList.remove("open");

  /* 5. Rejouer l'animation sur les lignes */
  var tbody = document.querySelector("#table-t" + n + " tbody");
  if (tbody) {
    tbody.querySelectorAll("tr").forEach(function (tr, idx) {
      tr.style.animation = "none";
      tr.offsetHeight;
      tr.style.animation = "fadeUp 0.3s ease " + idx * 0.02 + "s both";
    });
  }
}
