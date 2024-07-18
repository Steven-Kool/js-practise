const sumEvenNumbers = (array) => {
  let max = 0;
  if(array && array.length > 0) {
    for(const i of array) {
      if(i % 2 === 0) {
        max += i;
      }
    }
  }

  return max;
}

console.log(sumEvenNumbers([0, 1, 2, 3, 4]));
