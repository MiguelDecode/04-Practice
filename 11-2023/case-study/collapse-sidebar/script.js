const btnClose = document.getElementById("btn-close");
const btnOpen = document.getElementById("btn-open");
const sidebarElement = document.getElementById("sidebar");
const mainElement = document.getElementById("main");

const openNav = () => {
  sidebarElement.classList.add("show");
  mainElement.classList.add("show");
};

const closeNav = () => {
  sidebarElement.classList.remove("show");
  mainElement.classList.remove("show");
};

// Event Listeners
btnClose.addEventListener("click", closeNav);
btnOpen.addEventListener("click", openNav);

document.addEventListener("click", (event) => {
  if (event.target.matches("nav a")) closeNav();
});
