const btn = document.getElementById("btn1");
const arrow = document.getElementById("arrow");
const percentage = document.getElementById("percentage");
let grade = 0;
let clockwise = true;

percentage.textContent = `${grade} grades`;

const round = () => {
  if (clockwise) {
    grade += 20;
    arrow.style.transform = `rotate(${grade}deg)`;
    if(grade >= 360) clockwise = false;
  } else {
    grade -= 20;
    arrow.style.transform = `rotate(${grade}deg)`;
    if(grade <= 0) clockwise = true;
  }

  percentage.textContent = `${grade} grades`;
};

btn.addEventListener("click", round);
