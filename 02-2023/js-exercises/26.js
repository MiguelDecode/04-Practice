// Generar los primeros N números primos, donde n es ingresado por el usuario.

const checkPrime = (num) => {
  let prime;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return (prime = false);
    } else {
      prime = true;
    }
  }

  return prime;
};

const primesToNum = (limit) => {
  const primeNumbers = [];
  for (let i = 1; i <= limit; i++) {
    if (checkPrime(i)) primeNumbers.push(i);
  }
  return primeNumbers;
};

console.log(primesToNum(19));
console.log(primesToNum(100));

console.log(checkPrime(7));
console.log(checkPrime(8));
console.log(checkPrime(13));
console.log(checkPrime(37));
console.log(checkPrime(59));
console.log(checkPrime(67));
console.log(checkPrime(87));
console.log(checkPrime(89));
console.log(checkPrime(97));
