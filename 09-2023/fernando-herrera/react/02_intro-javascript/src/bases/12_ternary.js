const isActive = false;

let msg = "";

// Operador ternario

msg = isActive ? (msg = "Activo") : (msg = "Inactivo");

const msg2 = isActive && "Activo";

/* if (isActive) {
  msg = "Activo";
} else {
  msg = "Inactivo";
} */

console.log(msg);
console.log(msg2);
