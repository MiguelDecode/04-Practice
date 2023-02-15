// Determinar si un año dado es bisiesto.

const year = 1988;

if (typeof year === "number") {
  if (year % 4 === 0) {
    console.log(`The ${year} is a leap year`);
  } else {
    console.log(`The ${year} isn't a leap year`);
  }
} else {
  console.log("Enter a valid value as a year");
}
