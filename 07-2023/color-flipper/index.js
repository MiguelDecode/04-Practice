const $btnBg = document.getElementById("btnBg");
const $span = document.getElementById("hex");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexLength = hex.length;

const randomHex = () => {
  return hex[Math.floor(Math.random() * (hexLength - 1)) + 1];
};

const randomColor = () => {
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += randomHex();
  }
  return color;
};

document.addEventListener("click", (event) => {
  if (event.target === $btnBg) {
    let color = randomColor();
    document.body.style.background = `#${color}`;
    $span.textContent = `#${color}`;
    $span.style.color = `#${color}`;
  }
});
