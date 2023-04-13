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

/* const reverse = (sentence = "") => {
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
reverse(45) */

// 6. Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

/* const countRepeatWords = (sentence = "", word = "") => {
  if (!sentence)
    return console.warn(
      "No has introducido ningún caracter dentro de la la frase a buscar"
    );

  if (!word)
    return console.warn(
      "No has introducido ningún caracter dentro de la palabra a buscar"
    );

  if (typeof sentence !== "string")
    return console.warn(
      "La frase introducida no corresponde con un tipo válido"
    );

  if (typeof word !== "string")
    return console.warn("No has introducido un tipo válido de palabra");

  let total = 0;
  let i = 0;

  while (i !== -1) {
    i = sentence.indexOf(word, i);
    if (i !== -1) {
      i++;
      total++;
    }
  }

  console.log(`Se ha encontrado un total de ${total}`);
};

countRepeatWords("Hola mundo adios mundo", "mundo");
countRepeatWords();
countRepeatWords(45, "hola");
countRepeatWords(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a aliquet odio. Fusce faucibus odio non enim lacinia, eget ornare lacus laoreet. Donec gravida non lorem nec vulputate. Nulla condimentum rhoncus posuere. Integer ac lectus mi. Curabitur aliquam, neque ut tincidunt dignissim, nulla leo pharetra arcu, vitae maximus elit turpis ut nunc. Cras vitae sagittis lorem. Donec nunc diam, tincidunt quis luctus commodo, lacinia elementum nulla. Phasellus aliquam at nisl ut dictum. Fusce lectus lectus, accumsan eget laoreet eu, placerat facilisis lorem. Ut tellus sapien, posuere sed laoreet id, feugiat rhoncus felis. Praesent porttitor augue sed fringilla luctus. Vestibulum ac felis sed dolor hendrerit dapibus in nec libero. Suspendisse velit dolor, feugiat vel facilisis quis, interdum congue purus.",
  "lorem"
); */

// 7. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

/* const isPalindrome = (sentence = "") => {
  if (!sentence)
    return console.warn(
      "No has introducido ningún caracter dentro de la palabra comprobar"
    );

  if (typeof sentence !== "string")
    return console.warn(
      "La frase introducida no corresponde con un tipo válido"
    );

  sentence = sentence.toLowerCase();

  const reverseSentence = sentence.split("").reverse().join("");

  return sentence === reverseSentence
    ? console.log("Es un palíndromo")
    : console.log("No es un palíndromo");
};

isPalindrome("Salas");
isPalindrome(45);
isPalindrome("Ella te da detalle"); */

// 8. Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

/* const removePattern = (sentence = "", pattern = "") => { if (!sentence)
    return console.warn(
      "No has introducido ningún caracter dentro de la palabra comprobar"
    );

  if (typeof sentence !== "string")
    return console.warn(
      "La frase introducida no corresponde con un tipo válido"
    );

  if (!pattern)
    return console.warn(
      "No has introducido ningún caracer dentro del patrón de busqueda a eliminar"
    );

  if (typeof pattern !== "string")
    console.warn("No has introducido un patrón válido");

  const result = sentence.replace(new RegExp(pattern, "ig"), "");

  console.log(result);
};

removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
removePattern("hello", "o");
removePattern(45, "5"); */

// 9. Programa una función que obtenga un numero aleatorio entre 501 y 600.

/* const random = () => {
  const result = Math.round(Math.random() * (600 - 501 + 1) + 501);
  console.log(result);
};

random(); */

// 10. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

/* const isCap = (num = undefined) => {
  if (!num) return console.warn("No has introducido un número a evaluar");

  if (typeof num !== "number")
    return console.warn("No has introducido un número como valor");

  num = String(num);

  if (num.length < 2)
    return console.warn("Todos los numeros de una cifra son unarios");

  let reverseNum = num.split("").reverse().join("");

  num === reverseNum
    ? console.log("El número es capicúa")
    : console.log("El número no es capicúa");
};

isCap(3);
isCap(2002);
isCap(2937)
isCap('hello')
isCap() */

// 11. Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

/* const factorial = (num) => {
  if (!num) return console.warn("No has introducido ningún numero");

  if (typeof num !== "number")
    return console.warn("No has introducido un tipo de dato válido");

  if (num <= 0)
    return console.warn(
      "No se puede calcular el factorial de un número negativo o del número 0"
    );

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  console.log(result);
};

factorial(5);
factorial("hello");
factorial(true)
factorial(-30)
factorial()
 */

// 12. Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

/* const isPrime = (num) => {
  if (!num) return console.warn("No has introducido ningún numero");

  if (typeof num !== "number")
    return console.warn("No has introducido un tipo de dato válido");

  if (num <= 1) return console.warn("No hay números primos negativos y tampoco puedes incluir el cero ni el uno");

  let prime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  prime
    ? console.log("El número es primo")
    : console.log("El numero no es primo");
};

isPrime(77);
isPrime(7)
isPrime(5) */

// 13. Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

/* const isOdd = (num = undefined) => {
  if (!num) return console.warn("No has introducido ningún numero");

  if (typeof num !== "number")
    return console.warn("No has introducido un tipo de dato válido");

  num = Math.abs(num);

  num % 2 === 0 ? console.log("El número es impar") : console.log("El número es par");
};

isOdd(3);
isOdd(24);
isOdd(30);
isOdd();
isOdd(true);
isOdd("hello");
isOdd(-200); */

// 14. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

/* const convert = (num = undefined, temp = "C") => {
  if (num === undefined) return console.warn("No has introducido nigún número");

  if (!temp) return console.warn("No has introducido la temperatura");

  if (typeof num !== "number")
    return console.warn("No has introducido un valor válido de temperatura");

  if (typeof temp !== "string")
    return console.warn("No has introducido un valor válido de temperatura");

  if (temp !== "C" && temp !== "F")
    return console.warn(
      "No has introducido correctamente la unidad de medida de la temperatura"
    );

  if (temp === "C") {
    result = (num * 9) / 5 + 32;
    console.log(result);
  }

  if (temp === "F") {
    result = ((num - 32) * 5) / 9;
    console.log(result);
  }
};

convert(0, "C");
convert(32, "F");
convert("hello", "C");
convert(32, "D"); */

// 15. Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/* const transform = (num = undefined, base = undefined) => {
  if (!num) return console.warn("No has introducido un número a transformar");

  if (!base) return console.warn("No has introducido una base");

  if (typeof num !== "number" || typeof base !== "number")
    return console.warn(
      "No has introducido un dato válido en alguno de los parametros"
    );

  if (base !== 2 && base !== 10)
    return console.warn("No has introducido una base válida");

  let result;
  if (base === 2) {
    result = parseInt(num, base);
  }

  if (base === 10) {
    result = Number(num.toString(base));
  }

  console.log(result);
};

transform(100, 2);
transform();
transform(100);
transform("hello", 2);
transform(101, 2);
transform(4, 10); */

// 16. Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

/* const calculate = (amount, discount = 0) => {
  if (!amount)
    return console.warn("No has introducido la cantidad a comprobar");

  if (typeof amount !== "number")
    return console.warn("No has introducido una cantidad válida a comprobar");

  if (typeof discount !== "number")
    return console.warn("No has introducido un descuento válido");

  if (discount < 0)
    return console.warn("No se pueden realizar descuentos negativos");

  let total = amount - amount * (discount / 100);

  console.log(total);
};

calculate();
calculate("hello");
calculate(100, 20);
calculate(1000, 30);
calculate(100); */

// 17. Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const yearsToday = (date = undefined) => {
//   if (date === undefined)
//     return console.warn("No has introducido ninguna fecha");

//   if (!(date instanceof Date)) {
//     return console.warn("No has introducido un formato correcto de fecha");
//   }

//   let total = new Date().getTime() - date.getTime();
//   let seconds = total / 1000;
//   let minutes = seconds / 60;
//   let hours = minutes / 60;
//   let days = hours / 24;
//   let years = days / 365;

//   let result = Math.floor(years);

//   if (Math.sign(total) === -1) {
//     console.info(`Todavía faltan ${Math.abs(result)} años para llegar a esa fecha`);
//   } else if (Math.sign(total) === 0) {
//     console.info("Has introducido justo el momento de ahora");
//   } else {
//     console.info(result);
//   }

// };

// yearsToday(new Date(1984, 4, 23));
// yearsToday(new Date())
// yearsToday(new Date(2029, 4, 23))
// yearsToday();
// yearsToday("hello");

// 18. Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

/* const countLetters = (sentence = "") => {
  if (!sentence)
    return console.warn("No has introducido ninguna cadena de texto");

  if (typeof sentence !== "string")
    return console.warn("El tipo de dato introducido no se corresponde");

  let vowals = 0;
  let consonants = 0;

  for (const letter of sentence) {
    if (/[aeiouáéíóúAOEUIÁÓÉÚÍ]/.test(letter)) vowals++;

    if (/[BCDFGHJKLMNPQRSTXYVWZbcdfghjklmnqrstvwxyz]/.test(letter))
      consonants++;
  }

  console.log(
    `La frase tiene en total ${vowals} vocales y ${consonants} consonantes.`
  );
};

countLetters("Hola Mundo");
countLetters();
countLetters(28);
countLetters("ñoño"); */

// 19. Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

/* const checkName = (sentence) => {
  if (!sentence) return console.warn("No has introducido ninguna frase.");

  if (typeof sentence !== "string")
    return console.warn("El tipo de dato introducido no corresponde");

  let regExp = /^[A-Za-zñÑáóéíúÁÓÉÚÍ\s]+$/g;

  let result = regExp.test(sentence);

  result
    ? console.log("El nombre es válido")
    : console.log("El nombre no es válido");
};

checkName("Jonathan Mircha");
checkName();
checkName(35);
checkName("Jonathan 35"); */

// 20. Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

/* const validateEmail = (email) => {
  if (!email) return console.warn("No has introducido ningún email");

  if (typeof email !== "string")
    return console.warn("No has introducido un dato válido como email");

  let regExp =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

  regExp.test(email)
    ? console.log("Email correcto")
    : console.log("Email incorrecto");
};

validateEmail("www.johnmircha@gmail.com");
validateEmail();
validateEmail(34);
validateEmail("www.satehsat@.com"); */

// 21. Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

/* const numberAtSquare = (arr) => {
  if (!arr) return console.warn("No has introducido ningún dato a la función");

  if (arr.length === 0)
    return console.warn("No has introducido ningún valor dentro de tu array");

  if (!(arr instanceof Array)) {
    return console.warn("No has ingresado un arreglo a tu función");
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (typeof el !== "number") {
      console.log("Has ingresado un valor que no es un número");
      break;
    } else {
      newArr.push(el * el);
    }
  }

  if (arr.length === newArr.length) console.log(newArr);
};

numberAtSquare([1, 4, 5]);
numberAtSquare("hello");
numberAtSquare([]);
numberAtSquare(["hello", "tres", 3]);
numberAtSquare([3, "hello", 5]);
numberAtSquare({ name: "Marta" }); */

// 22. Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

/* const minMax = (arr) => {
  if (!arr) return console.warn("No has introducido ningún dato a la función");

  if (arr.length === 0)
    return console.warn("No has introducido ningún valor dentro de tu array");

  let allNumbers = true;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (typeof el !== "number") {
      console.warn("Alguno de los elementos introducidos no es un número");
      allNumbers = false;
      break;
    }
  }

  if (allNumbers) console.log(Math.max(...arr), Math.min(...arr));
};

minMax([1, 4, 5, 99, -60]);
minMax();
minMax([]);
minMax(["hello", 3, 8]); */

// 23. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

/* const oddAndEvens = (arr) => {
  if (!arr) return console.warn("No has introducido ningún array");

  if (arr.length === 0)
    return console.warn("No has introducido ningún valor dentro de tu array");

  if (!(arr instanceof Array)) {
    return console.warn("No has ingresado un arreglo a tu función");
  }

  for (const number of arr) {
    if (typeof number !== "number")
      return console.warn("Alguno de los valores introducidos no es un número");
  }

  let obj = {
    pares: arr.filter((number) => number % 2 === 0),
    impares: arr.filter((number) => number % 2 !== 0),
  };

  console.log(obj);
};

oddAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
oddAndEvens();
oddAndEvens("hello");
oddAndEvens([]);
oddAndEvens([2, 4, 3, 6, 5, "hello"]); */

// 24. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

/* const order = (arr) => {
  if (!arr) return console.warn("No has introducido ningún array");

  if (arr.length === 0)
    return console.warn("No has introducido ningún valor dentro de tu array");

  if (!(arr instanceof Array)) {
    return console.warn("No has ingresado un arreglo a tu función");
  }

  for (const number of arr) {
    if (typeof number !== "number")
      return console.warn("Alguno de los valores introducidos no es un número");
  }

  obj = {
    asc: [...arr].sort((a, b) => a - b),
    desc: [...arr].sort((a, b) => b - a),
  };

  console.table(obj);
};

order([7, 5, 7, 8, 6]);
order();
order([]);
order([3, 3, 5, 4, "hello"]); */

// 25. Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

/* const noDuplicates = (arr) => {
  if (!arr) return console.warn("No has introducido ningún array");

  if (arr.length === 0)
    return console.warn("No has introducido ningún valor dentro de tu array");

  if (!(arr instanceof Array)) {
    return console.warn("No has ingresado un arreglo a tu función");
  }

  console.log(new Set([...arr]));
};

noDuplicates(["x", 10, "x", 2, "10", 10, true, true]);
noDuplicates();
noDuplicates([]);
noDuplicates("hello"); */

// 26. Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

/* const average = (arr) => {
  if (!arr) return console.warn("No has introducido ningún array");

  if (arr.length === 0)
    return console.warn("No has introducido ningún valor dentro de tu array");

  if (!(arr instanceof Array)) {
    return console.warn("No has ingresado un arreglo a tu función");
  }

  for (const number of arr) {
    if (typeof number !== "number")
      return console.warn("Alguno de los valores introducidos no es un número");
  }

  arr.reduce((total, accu, index) => {
    total += accu;
    if (index === arr.length - 1) {
      return console.log(total / arr.length);
    } else {
      return total;
    }
  });
};

average([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
average();
average([]);
average("hello"); */

/* 27. Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película. */

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`La propiedad: ${propiedad} esta vacía`);

    if (typeof valor !== "string")
      return console.warn(
        `El valor: ${valor} ingresado de la propiedad: ${propiedad} no es una cadena de texto`
      );

    return true;
  }

  validarLonguitud(propiedad, valor, longuitud) {
    if (valor.length > longuitud)
      return console.error(
        `El valor: ${valor} de la propiedad: ${propiedad} excede el número de caracteres permitidos(${longuitud})`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor)
      return console.warn(
        `Para la propiedad: ${propiedad} no has ingresado ningún valor`
      );

    if (typeof valor !== "number")
      return console.warn(
        `Para la propiedad: ${propiedad} el valor ingresado: ${valor} no es un número`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor)
      return console.warn(
        `No has ingresado ningún valor para la propiedad: ${propiedad}`
      );

    if (!(valor instanceof Array))
      return console.error(
        `El valor: ${valor} ingresado para la propiedad: ${propiedad} no es un array`
      );

    if (valor.length === 0)
      return console.error(
        `Para la propiedad: ${propiedad} no has ingresado ningún valor dentro del array`
      );

    for (let value of valor) {
      if (typeof value !== "string")
        return console.error(
          `El valor: ${value} ingresado dentro de la propiedad: ${propiedad} no es válido`
        );
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `El IMDB id: ${id} no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      this.validarLonguitud("Título", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLonguitud("Director", director, 50);
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno: ${estreno} no es válido debe ser un número de cuatro digitos `
        );
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (const genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(
            `El género introducido ${genero} no se encuentra dentro de los aceptados`
          );
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion)) {
      return calificacion < 0 || calificacion > 10
        ? console.error(
            "La calificación debe estar entre un rango entre 0 y 10"
          )
        : (this.calificacion = calificacion.toFixed(1));
    }
  }

  fichaTecnica() {
    console.info("Ficha Tecnica:");
    console.info(`Título: ${this.titulo}`);
    console.info(`Director: ${this.director}`);
    console.info(`Año: ${this.estreno}`);
    console.info(`País: ${this.pais.join("-")}`);
    console.info(`Géneros: ${this.generos.join(", ")}`);
    console.info(`Calificación: ${this.calificacion}`);
    console.info(`IMDB id: ${this.id}`);
  }
}

/* const peli = new Pelicula({
  id: "tt1234567",
  titulo: "Título de la Peli",
  director: "Director de la Peli",
  estreno: 2020,
  pais: ["México", "Francia"],
  generos: ["Comedy", "Romance"],
  calificacion: 7.789,
});

peli.fichaTecnica(); */

const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1,
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0,
  },
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
