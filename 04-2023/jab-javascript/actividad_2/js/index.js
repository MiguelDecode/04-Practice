/*
	Utilizando: - switch y operadores ternarios
	Sin usar:   - if / else / else if
*/

const nota = document.getElementById("nota");
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");

nota.addEventListener("change", () => {
  let total = Math.abs(nota.value);
  let resultado;

  switch (total) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      resultado = "Has suspendido";
      break;
    case 5:
      resultado = "Has aprobado";
      break;
    case 6:
      resultado = "Has sacado un bien";
      break;
    case 7:
    case 8:
      resultado = "Has sacado un notable";
      break;
    case 9:
    case 10:
      resultado = "Has sacado un sobresaliente";
      break;
    default:
      resultado = "No has introducido uno nota válida";
      break;
  }

  uno.innerHTML = "";
  uno.innerHTML = resultado;

  let resultado2;

  total < 5
    ? (resultado2 = "Has suspendido")
    : total === 5
    ? (resultado2 = "Has aprobado")
    : total === 6
    ? (resultado2 = "Has sacado un bien")
    : total < 9
    ? (resultado2 = "Has sacado un notable")
    : total <= 10
    ? (resultado2 = "Has sacado un sobresaliente")
    : (resultado2 = "No has introducido una nota válida");

  dos.innerHTML = "";
  dos.innerHTML = resultado2;
});

