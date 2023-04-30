const json = {
  cadena: "Jon",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@jonmircha",
    email: "jonmircha@gmail.com",
  },
  null: null,
};

console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined")); Show an Error

console.log("---------------------------------------------");

console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify(null));
console.log(JSON.stringify({ x: 2, y: 3, z: 3 }));
console.log(JSON.stringify(json));

console.log(
  JSON.parse(
    '{"cadena":"Jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email":"jonmircha@gmail.com"},"null":null}'
  )
);
