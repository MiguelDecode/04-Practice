// Tag dialog

const dialog = document.querySelector("dialog");
const showModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

document.addEventListener("click", (event) => {
  if (event.target === showModalBtn) dialog.showModal();

  if (event.target === closeModalBtn) dialog.close();
});

// 