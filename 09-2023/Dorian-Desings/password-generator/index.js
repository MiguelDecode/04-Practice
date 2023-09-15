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

const optionsElement = document.getElementById("options");

let allowedCharacters = "";

const passwordCharacters = {
  lowercase: "abcdefghijklmnñopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: '+-.,!"$%&/()=?{}',
};

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

const checkPasswordOptions = (element) => {
  allowedCharacters = "";

  const allOptions = optionsElement.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  allOptions.forEach((checkbox) => {
    allowedCharacters += passwordCharacters[checkbox.id];
  });

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

/* lowercaseInputElement.addEventListener("change", checkPasswordOptions);
uppercaseInputElement.addEventListener("change", checkPasswordOptions);
numbersInputElement.addEventListener("change", checkPasswordOptions);
symbolsInputElement.addEventListener("change", checkPasswordOptions); */

optionsElement.addEventListener("click", (event) => {
  if (event.target.type !== "checkbox") return;
  checkPasswordOptions(event.target);
});
