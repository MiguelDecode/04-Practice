const btnClose = document.getElementById("btn-close");
const btnOpen = document.getElementById("btn-open");

const openNav = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
};

const closeNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

// Event Listeners
btnClose.addEventListener("click", closeNav);
btnOpen.addEventListener("click", openNav);

document.addEventListener("click", (event) => {
  if (event.target.matches("nav a")) closeNav();
});
