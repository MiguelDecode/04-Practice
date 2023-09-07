const rocket = document.querySelector(".nave");
let engineReady = false;
let distance = 0;

const moveRocket = () => {
  if (distance < 0) distance = 0;
  rocket.style.bottom = `${distance}px`;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Arrancando motores");
    engineReady = true;
    rocket.src = "img/nave2.png";
  }

  if (engineReady && event.key === "ArrowUp") {
    distance += 10;
  }

  if (engineReady && event.key === "ArrowDown") {
    distance -= 10;
  }

  moveRocket();
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log("Lista para el despegue");
    rocket.src = "img/nave1.png";
  }

  moveRocket();
});
