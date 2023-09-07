const input = document.getElementById("nombre");
const btn = document.querySelector(".boton");
const span = document.querySelector(".resultado");
let options = [];

const readInputValue = () => {
  let name = document.getElementById("nombre").value.trim();

  let formatName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

  formatName = formatName || "Desconocido";

  return formatName;
};

const createSelect = () => {
  !span.querySelector("select") &&
    span.appendChild(document.createElement("select"));
};

const addOption = (value) => {
  const option = document.createElement("option");
  option.innerHTML = value;
  option.value = value;
  const select = span.querySelector("select");
  if (options.includes(option.value)) {
    null;
  } else {
    options.push(option.value);
    select.appendChild(option);
  }
};

const processData = () => {
  const value = readInputValue();
  createSelect();
  addOption(value);
  resetInput();
};

const resetInput = () => {
  input.value = "";
  input.focus();
};

const optionToInput = (option) => {
  input.value = option;
};

document.addEventListener("click", (event) => {
  if (event.target === btn) processData();

  if (event.target.matches(".resultado>select")) {
    optionToInput(event.target.value);
  }
});

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") processData();
});
