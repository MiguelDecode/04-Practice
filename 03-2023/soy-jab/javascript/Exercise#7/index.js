const box = document.getElementById("box");

let red = "https://www.html6.es/img/rojo.png";
let blue = "https://www.html6.es/img/azul.png";

const createImage = (color) => {
  const img = document.createElement("img");
  img.src = color;

  if (color == red) {
    img.setAttribute("class", "card card--red");
  }

  if (color == blue) {
    img.setAttribute("class", "card card--blue");
  }

  box.appendChild(img);
};

document.addEventListener("click", (event) => {
  if (event.target.id === "btn1") {
    createImage(red);
  }

  if (event.target.id === "btn2") {
    for (let i = 0; i < 4; i++) {
      createImage(blue);
    }
  }

  if (event.target.id === "btn3") {
    const cards = box.querySelectorAll(".card--blue");

    cards.forEach((el) => {
      el.setAttribute("class", "card card--red");
      el.src = red;
    });
  }

  if (event.target.id === "btn4") {
    const cards = box.querySelectorAll(".card--red");

    cards.forEach((el) => el.remove());
  }

  if (event.target.id === "btn5") {
    box.innerHTML = "";
  }
});
