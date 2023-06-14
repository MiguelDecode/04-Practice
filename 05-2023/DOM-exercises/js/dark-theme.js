export default function darkTheme(btn, classDark) {
  const $btn = document.querySelector(btn);
  const $selectors = document.querySelectorAll("[data-dark]");
  let moon = "🌑";
  let sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((selector) => selector.classList.remove(classDark));
    $btn.textContent = moon;
    localStorage.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((selector) => selector.classList.add(classDark));
    $btn.textContent = sun;
    localStorage.setItem("theme", "dark");
  };

  document.addEventListener("click", (event) => {
    if (event.target.matches(btn))
      $btn.textContent === moon ? darkMode() : lightMode();
  });

  document.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme") === "light") lightMode();
    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}
