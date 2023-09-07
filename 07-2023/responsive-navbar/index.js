const $menu = document.getElementById("menu");
const $links = document.getElementById("links");

document.addEventListener("click", (event) => {
  if (event.target.matches(".nav__menu, .nav__menu *")) {
    $menu.classList.toggle("is-active");
    // $links.classList.toggle("hidden");

    $links.classList.contains("hidden")
      ? $links.classList.remove("hidden")
      : $links.classList.add("hidden");

    if ($links.classList.contains("display")) {
      $links.classList.remove("display");
    } else {
      $links.classList.add("display");
    }
  }
});

window.addEventListener("resize", (event) => {
  if (window.innerWidth > 768) $links.classList.remove("display");
});
