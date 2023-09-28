let a = 5;

if (a >= 10) {
  console.log("A es mayor o igual a diez");
} else {
  console.log("A es menor que diez");
}

console.log("Fin del programa");

const today = new Date();
console.log(today.getDay()); // 0:Domingo, 1:Lunes, 2:Martes,...

// = Operador de asignación.
// == Operador de igualdad.
// === Operador de igualdad estricta.

/* if (today === 4) {
  console.log("Hoy es Jueves.");
} else {
  if (today === 1) {
    console.log("Hoy es Lunes");
  } else {
    console.log("Hoy no es Lunes ni Jueves");
  }
} */

// Sin usar if - else , o switch , mostrar día de la semana

day = 10;

const week = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const arrWeek = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];

console.log(`Hoy es ${week[today.getDay()]}`);
// With an object
console.log(`Hoy es ${week[day]}`);
// With an array
console.log(`Hoy es ${arrWeek[day] || "indefinido"}`);
