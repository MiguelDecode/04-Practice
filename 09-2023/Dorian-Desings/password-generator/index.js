/* 
  Crear la estructura del HTML
    - Campo para la contraseña generada (id)
    - Texto para conocer la longuitud (id)
    - Input range para selecccionar la longuitud (id)
    - Botón para generar el password (id)

Javascript
    Localizar los elementos en el DOM: campo de la contraseña generada, texto para conocer la longuitud, input range para la longuitud y botón para generar el password.

    Añadir las constantes y variables del proyecto.
      - const allowedCharacters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+-.,!"$%&/()=?{}'


    Identificar qué funciones necesitamos
      - Función que genere el password.
      - Función que imprima el password.
      - Funcioón que asigne la longuitud del password 

    Identificar que eventos necesitamos
      - Cambio del input range
      - Click en el botón
      
    Hacer un boceto del flujo del programa (cuando mueva el input range tengo que ..., al hacer click en el botón tengo que llamar a la función...)

    Cada vez que exista una duda sobre el valor de un dato o de un parámetro, console.log para ver qué está sucediendo en nuestro programa.
*/

const passwordElement = document.getElementById("password");
const lengthTextElement = document.getElementById("password-length");
const rangeElement = document.getElementById("range");
const buttonGenerateElement = document.getElementById("generate-password");

const lowercaseInputElement = document.getElementById("lowercase-input");
const uppercaseInputElement = document.getElementById("uppercase-input");
const numbersInputElement = document.getElementById("numbers-input");
const symbolsInputElement = document.getElementById("symbols-input");

let allowedCharacters = "";

const lowerCaseCharacters = "abcdefghijklmnñopqrstuvwxyz";
const upperCaseCharacters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const numbersCharacters = "0123456789";
const symbolsCharacters = '+-.,!"$%&/()=?{}';

let passwordLength = rangeElement.value;
lengthTextElement.textContent = passwordLength;

const setPasswordLength = (event) => {
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};

const printPassword = (password) => {
  passwordElement.value = password;
};

const setDisabledButton = () => {
  buttonGenerateElement.disabled = !allowedCharacters.length;
};

const checkPasswordOptions = () => {
  allowedCharacters = "";
  if (lowercaseInputElement.checked) {
    allowedCharacters += lowerCaseCharacters;
  }

  if (uppercaseInputElement.checked) {
    allowedCharacters += upperCaseCharacters;
  }

  if (numbersInputElement.checked) {
    allowedCharacters += numbersCharacters;
  }

  if (symbolsInputElement.checked) {
    allowedCharacters += symbolsCharacters;
  }

  setDisabledButton();

  return allowedCharacters;
};

const generatePassword = () => {
  let newPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    newPassword += randomCharacter;
  }
  printPassword(newPassword);
};

rangeElement.addEventListener("input", setPasswordLength);

buttonGenerateElement.addEventListener("click", generatePassword);

lowercaseInputElement.addEventListener("change", checkPasswordOptions);
uppercaseInputElement.addEventListener("change", checkPasswordOptions);
numbersInputElement.addEventListener("change", checkPasswordOptions);
symbolsInputElement.addEventListener("change", checkPasswordOptions);
