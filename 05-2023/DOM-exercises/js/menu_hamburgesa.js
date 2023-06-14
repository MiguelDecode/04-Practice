export default function hamburgerMenu(panelBtn, panel, menuLink) {
  document.addEventListener("click", (event) => {
    if (
      event.target.matches(panelBtn) ||
      event.target.matches(`${panelBtn} *`)
    ) {
      document.querySelector(panel).classList.toggle("active");
      document.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (event.target.matches(menuLink)) {
      document.querySelector(panel).classList.remove("active");
      document.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
