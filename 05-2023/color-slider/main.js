const result = document.querySelector(".result input");
const copyBtn = document.getElementById("copy-btn");

const sliders = document.querySelectorAll('.wrapper input[type="range"]');

const inputRed = document.getElementById("red");
const inputGreen = document.getElementById("green");
const inputBlue = document.getElementById("blue");

const readColor = () => {
  let red = inputRed.value;
  let green = inputGreen.value;
  let blue = inputBlue.value;

  let colorResult = `rgb(${red}, ${green}, ${blue})`;
  return colorResult;
};

document.addEventListener("input", (event) => {
  if (event.target.matches('.wrapper input[type="range"]')) {
    let color = readColor();
    result.value = color;
    document.body.style.backgroundColor = color;
  }
});

const copyColor = () => {
  let color = result.value;
  navigator.clipboard
    .writeText(color)
    .then(() => {
      copyBtn.textContent = '"Copied"';
      setTimeout(() => {
        copyBtn.textContent = "Copy Color Code";
      }, 1500);
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
};

document.addEventListener("click", (event) => {
  if (event.target.matches("#copy-btn")) {
    copyColor();
  }
});
