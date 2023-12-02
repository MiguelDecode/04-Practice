/* 
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/

const calculateResult = (string) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "#":
        count++;
        break;
      case "@":
        count--;
        break;
      case "*":
        count *= count;
        break;
      case "&":
        console.log(count);
        break;
    }
  }
};

calculateResult('&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&')