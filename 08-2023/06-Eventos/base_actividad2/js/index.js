const input = document.querySelector(".campo");
const pulses = document.querySelector(".pulsaciones");
const box = document.querySelector(".caja");
let count = 0;
let msg = `${count} teclas pulsadas`;

pulses.innerHTML = msg;

const writeMessage = () => {
  count === 1
    ? (msg = `${count} tecla pulsada`)
    : (msg = `${count} teclas pulsadas`);
  pulses.innerHTML = msg;
};

const addLetter = (letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.classList.add("tecla");
  box.appendChild(span);
};

input.addEventListener("keydown", (event) => {
  if (event.key === "." || event.key === ",") {
    event.preventDefault();
  } else {
    event.key === "Backspace" ? count-- : count++;
    if (event.key !== "Backspace") {
    }
    if (count < 0) count = 0;
  }
  writeMessage();
  addLetter(event.key);
});
