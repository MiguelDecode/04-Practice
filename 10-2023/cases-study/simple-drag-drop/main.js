const dropContainer = document.getElementById("drop-point");
const dragObjects = document.querySelectorAll(".draggable");

// Drag and drop

let dragItem;

document.addEventListener("dragstart", (event) => {
  if (event.target.matches(".draggable")) {
    dragItem = event.target
  }
});

dropContainer.addEventListener("dragleave", () => {
  dropContainer.appendChild(dragItem)
});
