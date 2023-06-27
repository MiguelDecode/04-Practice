// 01. Escribe un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo.

/* 
#
##
###
####
#####
######
####### 
*/

/* const drawHalfTree = (rows = 7) => {
  let sentence = "";

  for (let i = 0; i < rows; i++) {
    sentence += "#";
    console.log(sentence);
  }
};

drawHalfTree();
drawHalfTree(14); */

// 02. Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

/* const FizzBuzz = (min = 1, max = 100) => {
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

FizzBuzz();
FizzBuzz(15, 125) */

// 03. Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos)

/* const FizzBuzz = (min = 1, max = 100) => {
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

FizzBuzz(); */

// 04. Escribe un programa que cree un string que represente una cuadrícula de 8 * 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un caracter "#". Las caracteres deberían de formar un tablero de ajedrez.
/* 
 # # #
# # # 
 # # #
# # # 
 # # #
# # # 
 # # #
# # # 
 */

/* const drawDress = (size = 8) => {
  if (size % 2 !== 0)
    return console.warn(
      "El tablero debe tener un número par de casillas por tamaño"
    );
  let row = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 === 0) {
        j % 2 === 0 ? (row += " ") : (row += "#");
      } else {
        j % 2 === 0 ? (row += "#") : (row += " ");
      }
    }
    row += "\n";
  }

  console.log(row);
};

drawDress();
drawDress(7);
drawDress(16); */

// 05. Escribe una función min que tome dos argumentos y retorne su mínimo

/* const min = (a, b, ...c) => Math.min(a, b, ...c);

console.log(min(1, 2, 3));
console.log(min(75, 8, 9, 19, 83, 98)); */

// 06. Recursión. Hemos visto que % se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:

// Zero es par
// Uno es impar
// Para cualquier otro número N, su paridad es la misma que N-2

// Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro(un número entero, positivo) y devolver un booleano.

/* const esPar = (num) => {
  if (num === 0) return true;
  if (num === 1) return false;
  return esPar(num - 2);
};

console.log(esPar(100)); */

// 06. Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo "f"). El primer carácter tiene posición cero, lo que hace que el último se encuentre en la posición string.length - 1. En otras palabras, un string de dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.
// Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos carácteres "F" en mayúsculas haya en el string.

/* const countCharacter = (sentence, letter) => {
  sentence = sentence.toLowerCase();
  let counter = 0;
  for (let i = sentence.length; i > 0; i--) {
    if (sentence[i] === letter) counter++;
  }

  return counter;
};

let sentence =
  "El jurado falló a favor del acusado y los familiares de la víctima se indignaron.";

console.log(countCharacter(sentence, "a")); */

// 07. Escribe una función de rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos los números desde inicio hasta(e incluyendo) final.

/* const arrRange = (init, final) => {
  let result = [];
  for (let i = init; i <= final; i++) {
    result.push(i);
  }
  return result;
}; */

// console.log(arrRange(1, 10));

// Luego, escribe una función suma que tome un array de números y retorne la suma de estos números.

/* const sumaArr = (arr) => {
  return arr.reduce((a, b) => a + b);
};

const sumarArr = (arr) => {
  let result = 0;
  arr.forEach((num) => (result += num));
  return result;
};

console.log(sumaArr(arrRange(1, 10)));
console.log(sumarArr(arrRange(1, 10))); */

// Como misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique un valor de "paso" utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiendo al comportamiento anterior. La llamada a la función rango(1, 10,2) debería retornar [1,3,5,7,9]. Asegúrate de que también funcione con valores de pasos negativos pra que rango(5, 2 , -1) produczca también [5,4,3,2]

/* const specialRange = (init, final, step = 1) => {
  let result = [];
  if (Math.sign(step) === 0)
    return "No has introducido un valor de paso distinto de cero";

  if (Math.sign(step) === -1 && init > final) {
    for (let i = init; i >= final; i = i - Math.abs(step)) {
      result.push(i);
    }
    return result;
  }

  if (Math.sign(step) === 1 && final > init) {
    for (let i = init; i <= final; i = i + step) {
      result.push(i);
    }

    return result;
  }

  return "Tu bucle no cumple con las condiciones";
};

console.log(specialRange(1, 10, 0));
console.log(specialRange(1, 10))
console.log(specialRange(1, 10, 2));
console.log(specialRange(10, 1, -2));
console.log(specialRange(1, 10, -2)); */

// 08. Escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el método reverse: modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.

/* let arr = [2, 4, 6, 8, 10];

const revertirArray = (arr) => {
  let revArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr;
};

console.log(revertirArray(arr));
console.log(arr);

const revertirArrayEnSuLugar = (arr) => {
  let init = 0;
  let final = arr.length - 1;

  // Se necesita una variable temporal para guardar el valor de una de las dos posiciones de extremo
  // Se va reduciendo en uno las posiciones de los extremos para ir acercandonos al centro. En caso de ser un solo número no se cumple la condición y no se intercambia.
  while (init < final) {
    let temp = arr[init];
    arr[init] = arr[final];
    arr[final] = temp;

    init++;
    final--;
  }
};

revertirArrayEnSuLugar(arr);

console.log(arr); */

// TODO 09. Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da [1, 2, 3] como argumento. También escribe una función listaAArray que produzca un array de una lista. Luego agrega una función de utilidad preceder, que tome un elemento y una lista y creé una nueva lista que agrega el elemento al frente de la lista de entrada, y posicion, que toma una lista y un número y retorne el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no exista tal elemento.


// 10.