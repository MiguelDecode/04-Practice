// Generar los primeros N números perfectos.

const checkPerfect = (num) => {
  let suma = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      suma += i;
    }
  }
  return suma === num ? true : false;
};

const perfectsToNum = (limit) => {
  const perfects = [];
  for (let i = 1; i <= limit; i++) {
    if (checkPerfect(i)) perfects.push(i);
  }
  return perfects;
};

console.log(checkPerfect(6));
console.log(checkPerfect(8));

console.log(perfectsToNum(100));
console.log(perfectsToNum(10000));
