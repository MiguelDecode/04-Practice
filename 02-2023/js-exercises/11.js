// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

let triangle = [90, 40, 50];

if (
  typeof triangle[0] === "number" &&
  typeof triangle[1] === "number" &&
  typeof triangle[2] === "number"
) {
  if (triangle[0] + triangle[1] + triangle[2] === 180) {
    console.log("It's a triangle");
  } else {
    console.log("With this angles can't form a triangle");
  }
} else {
  console.log("Introduce a value number");
}
