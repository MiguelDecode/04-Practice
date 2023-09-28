// Objetos Literales

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 597583928,
    lat: 14.397598,
    lng: 37.525809,
  },
};

console.log(persona);

// console.table( persona );

// Se esta copiando la referencia a persona
// const persona2 = persona;

// Varia el valor de la propiedad en ambos casos
// Realiza una copia superficial del objeto
const persona2 = { ...persona };
persona2.nombre = "Peter";
persona2.direccion.ciudad = "Santa Fe";

console.log(persona);
console.log(persona2);
