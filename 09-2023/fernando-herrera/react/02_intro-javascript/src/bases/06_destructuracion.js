// Desestructuración
// Destructuring
// Asignación Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// Redeclarando la variable con otro nombre y destructuring
const { nombre: name, edad, clave } = persona;

console.log(name, edad, clave);

// Destructuración directamente dentro de los parámetros de la función
const retornaPersona = ({ nombre, edad, clave, rango = "Capitán" }) => {
  console.log(nombre, edad, clave);
  console.log(rango);

  return {
    nombreClave: clave,
    age: edad,
    latlng: {
      lat: 12.2425,
      lng: 32.2523,
    },
  };
};

const {
  nombreClave,
  age,
  latlng: { lat, lng },
} = retornaPersona(persona);

console.log(nombreClave, age);
console.log(lat, lng);
