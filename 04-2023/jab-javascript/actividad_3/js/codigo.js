/*
Único bucle posible: for of
Sin usar: find, findIndex, indexOf, map
*/

const $body = document.querySelector("body");

const createSelect = () => {
  const select = document.createElement("select");
  select.classList.add("box");

  for (const tech of datos) {
    const option = document.createElement("option");
    option.textContent = tech.tecnologia;
    option.value = tech.tecnologia;

    select.appendChild(option);
  }

  $body.appendChild(select);
};

createSelect();

const info = document.createElement("section");
info.classList.add("box");
const sentence = document.createElement("p");
sentence.classList.add("box");

const drawInfo = () => {
  const name = document.querySelector("select").value;
  let counter = 0;

  for (const tech of datos) {
    if (tech.tecnologia === name) {
      // Obtiene todos los valores de un objeto y los devuelve en un array. Ayuda en caso de que los objetos sean distintos.
      const elementos = Object.values(tech);

      info.innerHTML = "";
      for (const el of elementos) {
        info.insertAdjacentHTML("beforeend", `<p>${el}</p>`);
      }

      sentence.innerHTML = `En ${tech.nacimiento || "año desconocido"} nació ${
        tech.tecnologia || "no se sabe"
      }(Indice: #${counter})`;
    }
    counter++;
  }

  $body.appendChild(info);
  $body.appendChild(sentence);
};

document.addEventListener("click", (event) => {
  const $select = document.querySelector("select");

  if (event.target === $select) {
    drawInfo();
  }
});
