const MINAME = "Miguel";
const IVA = 0.21;
let amount = 2;
let price = 4;

let total = calculateIVA(amount, price);

let box = document.querySelector(".box");

greet();
calculateIVA(amount, price);

function greet() {
  box.innerHTML = `Hello, Mr ${MINAME}`;
}

function calculateIVA(a, b) {
  let result = a * b;
  return result * IVA + result;
}

function write(text) {
  box.innerHTML = `${text}`;
}

console.log(total);
