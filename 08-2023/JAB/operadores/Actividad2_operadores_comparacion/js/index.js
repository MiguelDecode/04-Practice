// Escribe aquí tus datos correctos
const NOMBRE_CORRECTO = "jab";
const ALIAS_CORRECTO = "soyjab";
const PIN_CORRECTO = 12;
const PASSWORD_CORRECTO = "1234";

/* Estos son los datos del usuario
(modifícalos para comprobar que todo funciona correctamente)*/

const NOMBRE = "jab";
const PIN = 12;
const PASSWORD = "12345";

const $result = document.querySelector(".resultado");

const bien = () => {
  $result.classList.add("bien");
  $result.innerHTML = "Bien";
};

const mal = () => {
  $result.classList.add("mal");
  $result.innerHTML = "Mal";
};

NOMBRE == PIN && NOMBRE == PASSWORD && PIN == PASSWORD
  ? bien()
  : NOMBRE === "" || typeof PIN !== "number" || PASSWORD === ""
  ? mal()
  : (NOMBRE === NOMBRE_CORRECTO || NOMBRE === ALIAS_CORRECTO) &&
    (PIN === PIN_CORRECTO || PASSWORD === PASSWORD_CORRECTO)
  ? bien()
  : mal();

/*
Si el usuario ha escrito el mismo valor  en NOMBRE, PIN y PASSWORD (pero no ha dejado ninguno vacío): es "Bien"
o bien 
Si el NOMBRE es igual al NOMBRE_CORRECTO o al ALIAS_CORRECTO
y además de eso
el PIN es igual al PIN_CORRECTO
o bien
el PASSWORD es igual al PASSWORD_CORRECTO (cualquiera de las 2)
Entonces se muestra: "Bien" (color "green")
En el resto de casos: "Mal" (color "red")
*/

/*
  (condiciones)
  ? ______
  : ______
*/
