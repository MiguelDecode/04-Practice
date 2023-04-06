// 1. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/* const countCharacters = (sentence = "") => {
  if (typeof sentence !== "string")
    return console.warn("No has introducido un tipo de dato válido");

  if (!sentence) {
    return console.warn("No ingresaste ningún carácter");
  } else {
    console.info(
      `La cadena de texto ${sentence} tiene ${sentence.length} carácteres.`
    );
  }
};

countCharacters("Hola Mundo");
countCharacters();
countCharacters(true);
countCharacters(34);
countCharacters([1, 2, 3]); */

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

/* const miFuncion = (sentence = "", value = undefined) => {
  if (typeof sentence !== "string")
    return console.warn("No has introducido un tipo de cadena de texto válida");
  if (typeof value !== "number")
    return console.warn("No has introducido un tipo de valor númerico válido");

  if (!sentence) return console.warn("No has introducido una cadena de texto");
  if (value === 0)
    return console.warn("No se puede develover una cadena recortada por cero");
  if (value < 0)
    return console.warn(
      "No se puede devolver una cadena recortada por un número negativo"
    );

  sentence = sentence.trim();

  console.log(sentence.slice(0,value));
};

miFuncion("Hola Mundo", 4);
miFuncion('Tres tristes tigres comian trigo en un trigal', 20)
miFuncion();
miFuncion(true, false);
miFuncion("Hola Mundo", false);
miFuncion("Hola Mundo");
miFuncion("Hola Mundo", -3); */

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

/* const miFuncion = (sentence = "", separator = "") => {
  if (!sentence || !separator)
    return console.warn(
      "No has ingresado nada como cadena de texto o separador"
    );

  if (typeof sentence !== "string" || typeof separator !== "string")
    return console.warn(
      "No has ingresado un dato válido como cadena de texto o separador"
    );

  sentence = sentence.trim();

  let result = sentence.split(separator);

  console.log(result);
};

miFuncion("hola que tal", " ");
miFuncion("hola que tal", "q");
miFuncion("hola que tal", 48);
miFuncion();
miFuncion(true, false);
miFuncion("hola que tal"); */

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/* const miFuncion = (sentence = "", num = undefined) => {
  if (!sentence) return console.warn("No has introducido una cadena de texto");
  if (num === undefined)
    return console.warn(
      "No has introducido el número de veces a repetir la cadena"
    );

  if (typeof sentence !== "string")
    return console.warn(
      "No has introducido un dato válido como cadena de texto"
    );

  if (typeof num !== "number")
    return console.warn(
      "No has introducido un número como parametro a repetir"
    );

  if (num < 2)
    return console.warn(
      "No se puede repetir la cadena una vez, cero veces o números negativos"
    );

  sentence = sentence.trim() + ", ";

  let result = sentence.repeat(num);

  console.log(result);
};

miFuncion();
miFuncion("Hola Mundo", 3);
miFuncion(43, 3);
miFuncion(true, 3);
miFuncion('Hola Mundo', -3) */

// 5. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const reverse = (sentence = "") => {
  if (!sentence)
    return console.warn(
      "No has introducido ningún carácter dentro de la cadena de texto"
    );

  if (typeof sentence !== "string")
    return console.warn(
      "No has introducido un dato válido como cadena de texto"
    );

  result = sentence.split("").reverse().join('');

  console.log(result);
};

reverse("Hola mundo");
reverse(true)
reverse(45)
