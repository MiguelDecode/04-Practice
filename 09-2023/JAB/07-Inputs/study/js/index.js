const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const box = document.querySelector(".box");

const readInputValue = () => {
  let name = document.querySelector("#input").value.trim();
  formatName = capitalize(name);
  console.log(formatName);
  showValue(formatName);
  resetInput();
};

const capitalize = (string) => {
  string = string.slice(0, 1).toUpperCase() + string.slice(1);
  return string;
};

const showValue = (name) => {
  name = name || "Desconocido";
  box.innerHTML = `Hola ${name}`;
};

const resetInput = () => {
  input.value = "";
  input.focus();
};

btn.addEventListener("click", readInputValue);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") readInputValue();
});
