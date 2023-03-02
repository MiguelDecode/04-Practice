function countdown(n){
  if(n < 1) {
    return [];
  } else {
  const newArray = countdown(n - 1);
  newArray.unshift(n);
  return newArray;
  }
}

console.log(countdown(-1));
console.log(countdown(10));