let box = document.querySelector(".container");
let number = 2;
let number1 = 3;
let number2 = "3";
let name = "Miguel";

number += 10;
number1 -= 5;

let result = number / number1 - number2;
let result2 = number + number2;

function draw(value) {
  box.innerHTML += `<div>${value}</div>`;
}

// draw(3);
// draw(10);
draw(result2);

let resultado = 1 + 2 * 3 // Ley de la precedencia

draw(resultado)
