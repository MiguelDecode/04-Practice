let nombre = "Jab";
let edad = 37;
let actual = new Date().getFullYear();

function calculateBirthYear(age) {
  return actual - age;
}

let resultado = `Mi nombre es ${nombre}, mi edad es ${edad} y nací en el año ${calculateBirthYear(
  edad
)}`;

console.log(resultado);

document.querySelector("body").innerHTML = `
  <p>
  Mi nombre es <span class="red">${nombre}</span>, mi edad es ${edad} y nací en el año ${calculateBirthYear(
  edad
)}
  </p>
  <button>Click Me!</button>
<img src="https://images.pexels.com/photos/17579690/pexels-photo-17579690/free-photo-of-mar-ciudad-paisaje-vacaciones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
`;
