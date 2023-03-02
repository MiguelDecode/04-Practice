function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum) {
    return [startNum];
  } else {
    const newArray = rangeOfNumbers(startNum + 1, endNum);
    newArray.unshift(startNum);
    return newArray;
  }
}

console.log(rangeOfNumbers(20, 30));