// Recursividad

function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
  if (n <= 0) {
    console.log("n = 0");
    return 0;
  } else {
    console.log(arr[n - 1]);
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Cambia solo el código encima de esta línea
}

// console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));
