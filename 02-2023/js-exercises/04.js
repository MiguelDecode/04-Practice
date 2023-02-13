// Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

const a = [1, 2, 3];
const b = new Date();
const c = "Hello World";
const d = 39;
const e = { name: "Miguel", surname: "Decode" };
const f = true;

console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(b));
console.log(Object.prototype.toString.call(c));
console.log(Object.prototype.toString.call(d));
console.log(Object.prototype.toString.call(e));
console.log(Object.prototype.toString.call(f));
