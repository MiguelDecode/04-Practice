const img = document.querySelector(".poster");
const svg = document.querySelector("svg");

img.addEventListener("dblclick", () => {
  console.log("doble");
  svg.classList.add("like");

  setTimeout(() => {
    svg.classList.remove("like");
  }, 1000);
});
