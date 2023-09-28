const day = 3;

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "S ábado",
  "Domingo",
];

const printDay = (index) => console.log(`Hoy es ${days[index]}`);

printDay(day);

switch (day) {
  case 0:
    printDay(day);
    break;
  case 1:
    printDay(day);
    break;
  case 2:
    printDay(day);
    break;
  case 3:
    printDay(day);
    break;
  case 4:
    printDay(day);
    break;
  case 5:
    printDay(day);
    break;
  case 6:
    printDay(day);
    break;
  default:
    console.log("El día introducido no es válido");
    break;
}
