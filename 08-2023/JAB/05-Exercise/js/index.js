const btnStart = document.querySelector(".boton1");
const box = document.querySelector(".caja");

let counter = 1;

const changeInnerBox = () => {
  box.innerHTML = `
  <button class="boton2">Añadir 1</button><button class="boton3">Reiniciar</button>
  <div class="resultado">${counter}</div>
  `;

  // const btnAdd = document.createElement("button");
  // btnAdd.classList.add("boton2");
  // btnAdd.textContent = "Añadir 1";
  // const btnReset = document.createElement("button");
  // btnReset.classList.add("boton3");
  // btnReset.textContent = "Reiniciar";
  // const result = document.createElement("div");
  // result.classList.add("resultado");
  // result.textContent = `${counter}`;
  // box.innerHTML = "";
  // box.appendChild(btnAdd);
  // box.appendChild(btnReset);
  // box.appendChild(result);
};

const updateResult = () => {
  const screenResult = document.querySelector(".resultado");
  screenResult.textContent = `${counter}`;
};

document.addEventListener("click", (event) => {
  const btnAdd = document.querySelector(".boton2");
  const btnReset = document.querySelector(".boton3");

  if (event.target === btnStart) changeInnerBox();
  if (event.target === btnAdd) {
    counter++;
    updateResult();
  }
  if (event.target === btnReset) {
    counter = 1;
    updateResult();
  }
});
