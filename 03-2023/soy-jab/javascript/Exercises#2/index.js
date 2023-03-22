const main = document.getElementById("main");

const createBtn = (text, color, id) => {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.style.backgroundColor = color;
  btn.style.padding = "1rem";
  btn.style.color = "white";
  btn.style.fontWeight = "bold";
  btn.style.borderRadius = "1rem";
  btn.style.margin = "1rem";
  btn.style.border = "none";
  btn.id = id;

  main.appendChild(btn);
};

createBtn("Botón 1", "blue", "btn1");
createBtn("Botón 2", "orange", "btn2");
createBtn("Botón 3", "blue", "btn3");

const logo = document.createElement("img");
logo.src = "./three-pilar.png";
logo.alt = "logo";

main.appendChild(logo);

document.addEventListener("click", (event) => {
  const img = document.querySelector("img");

  if (event.target.id === "btn1") {
    img.style.backgroundColor = "blue";
    img.style.transform = "rotate(10deg)";
    event.target.style.visibility = "hidden";
  }

  if (event.target.id === "btn2") {
    if (event.target.style.backgroundColor === "orange") {
      img.style.visibility = "hidden";
      event.target.style.backgroundColor = "blue";
    } else {
      img.style.visibility = "visible";
      event.target.style.backgroundColor = "orange";
    }
  }

  if (event.target.id === "btn3") {
    img.style.visibility = "visible";
    img.style.transform = "rotate(0)";
    img.style.backgroundColor = null;
    document.getElementById("btn2").style.backgroundColor = "orange";
    document.getElementById("btn1").style.visibility = "visible";
  }
});
