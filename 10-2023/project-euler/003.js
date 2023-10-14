// Calcular cual es el factor primo mas grande dado un número.
// Números primos: 2, 3, 5, 7, 11, 13, 17, ...

function largestPrimeFactor(number) {
  let divider = 2;
  while (number > 1) {
    if (number % divider === 0) {
      number = number / divider;
    } else divider++;
  }
  return divider;
}

largestPrimeFactor(13195);
