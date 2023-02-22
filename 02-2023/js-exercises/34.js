// Eduardo Fierro 

let serie = "Friends";

let quedarAmigos = function () {
  console.log("Paso 1", "Entrando en el bar");

  let bar = "Central Park";

  let beber = function () {
    let bebida = "Café";
    console.log("Paso 2", `Bebiendo ${bebida} en ${bar}`);
  };

  let comer = function () {
    console.log("Paso 3", "Ñan Ñam Ñam");
  };

  beber(); // Retornamos a la declaración de la función
  comer(); // Retornamos a la declaración de la función
};

quedarAmigos(); // Retornamos a la declaración de la función
