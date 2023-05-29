const $mainCard = document.getElementById("main-card");
const $btnCapture = document.getElementById("capture-button");
const $previewCard = document.getElementById("preview-card");
const $btnDownload = document.getElementById("download-button");

const takeCanvas = async () => {
  const canvas = await html2canvas($mainCard);
  const imageURL = canvas.toDataURL();
  return imageURL;
};

document.addEventListener("click", async (event) => {
  if (event.target === $btnCapture) {
    console.log("Captura");
    $btnDownload.classList.remove("hide");
    const imageURL = await takeCanvas();
    $previewCard.innerHTML = `<img src="${imageURL}" id="image">`;
  }

  if (event.target === $btnDownload) {
    console.log("Descarga");
    const imageURL = await takeCanvas();
    $btnDownload.href = imageURL;
    $btnDownload.download = "fish.png";
  }
});

document.addEventListener("load", () => {
  $btnDownload.classList.add("hide");
  $previewCard.innerHTML = "";
});
