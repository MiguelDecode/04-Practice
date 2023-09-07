let nombre1 = "Jab";
let nombre2 = "Jab";
let nombre3 = `Jab`;
let imagen = "usuario.png";

let edad = 37;

let actualYear = new Date().getFullYear();

let resultado = "Mi nombre es " + nombre1 + " " + "y tengo " + edad;
let resultado2 = "Mi nombre es " + nombre2;
let resultado3 = `Mi nombre es ${nombre3} y tengo ${edad}. Mi año de nacimiento es ${calculateBirthYear()}`;

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

function calculateBirthYear() {
  return actualYear - edad;
}

let body = (document.querySelector("body").innerHTML = `
<div>
  Mi nombre es <span class="red">${nombre1}</span>
</div>
<button>Aceptar</button>
<div class="imagen">
  <img src="./img/${imagen}" alt="avatar"/>
</div>
`);

