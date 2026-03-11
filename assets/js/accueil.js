document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-item")
      .forEach((n) => n.classList.remove("active"));
    item.classList.add("active");
  });
});

document.querySelectorAll(".page-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".page-btn")
      .forEach((b) => b.classList.remove("active"));
    if (!["‹", "›"].includes(btn.textContent.trim()))
      btn.classList.add("active");
  });
});
