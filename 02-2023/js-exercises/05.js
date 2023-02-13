// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

const isOdd = () => {
  const num = prompt("Insert a number and I guess if is odd or even");

  if (isNaN(num)) {
    alert(`${num} isn't a valid value`);
    return;
  }

  if (num % 2 === 0) {
    alert(`${num} is a odd number`);
  } else {
    alert(`${num} is a even number`);
  }
};

isOdd();
