const btn1 = document.getElementById("btn1");
const main = document.querySelector(".main");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn1.addEventListener("click", () => {
  main.innerHTML = "<h1>Hola Mundo</h1>";
});

btn2.addEventListener("click", () => {
  main.innerHTML = '<img src="./assets/html-icon.png" alt="logo" />';
});

btn3.addEventListener("click", () => {
  let button = document.createElement("button");
  button.textContent = "Botón nuevo";
  button.classList.add("btn");

  main.appendChild(button);
});

btn4.addEventListener("click", () => {
  main.innerHTML = "";
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((el) => console.log(el.id));

document.addEventListener("click", (event) => {
  if (event.target.id === "btn1") {
    console.log("Botón 1");
  }

  if (event.target.id === "btn2") {
    console.log("Botón 2");
  }

  if (event.target.id === "btn3") {
    console.log("Botón 3");
  }

  if (event.target.id === "btn4") {
    console.log("Botón 4");
  }
});

document.addEventListener("click", (event) => {
  for (let i = 1; i <= buttons.length; i++) {
    if (event.target.id === `btn${i}`) {
      console.log(`Botón ${i}`);
    }
  }
});

document.addEventListener("click", (event) => {
  buttons.forEach((el) => {
    if (el.id === event.target.id) {
      console.log(`Has pulsado el botón ${event.target.textContent}`);
    }
  });
});
