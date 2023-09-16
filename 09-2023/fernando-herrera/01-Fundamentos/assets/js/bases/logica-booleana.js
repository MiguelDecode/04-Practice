const returnTrue = () => {
  console.log("Regresa true");
  return true;
};

const returnFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negación");
console.log(true);
console.log(!true);
console.log(!false);
console.log(!returnTrue());

console.warn("And"); // Todas las condiciones deben ser true para retornar un true
console.log(true && true && true);
console.log(true && false && true);

console.log(null && true);
console.log(true && 0);
console.log("Miguel" && undefined);
console.log("Miguel" && "");
console.log(returnFalse() && returnTrue());

console.warn("Or");
console.log(true || false || true);
console.log(false || "Miguel");
console.log("---");
console.log(returnFalse() || returnTrue());
console.log("---");
console.log(returnTrue() || returnFalse());

console.warn("Asignaciones con operadores");
const isUndefined = undefined;
const isNull = null;
const isFalse = false;

const a1 = true && "Hola Mundo" && 148;
const a2 = "Hola" && "Mundo" && isFalse;
const a3 = isFalse || "Ya no soy falso";
const a4 =
  isFalse || isUndefined || isNull || "Ya no soy falso de nuevo" || true;
const a5 =
  isFalse || isUndefined || returnTrue() || "Ya no soy falso de nuevo" || true;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

if (returnTrue() && (true || true || true || false)) {
  console.log("True");
} else {
  console.log("False");
}
