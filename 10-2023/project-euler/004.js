// Realiza una función que busque el palíndromo mas grande que sea el producto de dos números de n dígitos.

// Por ejemplo si n = 2 la multiplicación sería 91 * 99 = 9009

const isPalindrome = (number) => {
  let stringNumber = String(number);
  const reverseNumber = stringNumber.split("").reverse().join("");

  return stringNumber === reverseNumber;
};

const maxNumber = (n) => {
  let number = "";
  for (let i = 0; i < n; i++) {
    number += "9";
  }
  return Number(number);
};

const minNumber = (n) => (maxNumber(n) + 1) / 10;


const maxProductPalindrome = (n) => {
  let result = 0;
  for (let i = maxNumber(n); i > minNumber(n); i--) {
    for (let j = maxNumber(n); j > minNumber(n); j--) {
      if (isPalindrome(i * j)) {
        if (i * j > result) result = i * j;
      }
    }
  }
  return result;
};

maxProductPalindrome(2);

console.log(maxProductPalindrome(3));
