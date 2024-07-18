const findUniqueIndexPairs = (numbers, targetSum) => {
  const result = [];

  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === targetSum) {
        let include;

        for(let k = 0; k < result.length; k++) {
          if (result[k].includes(i) || result[k].includes(j)) include = true;
        }

        if (!include) result.push([i, j]);
      }
    }
  }

  return result;
}

console.log(findUniqueIndexPairs([0, 0, 0, 0, 1, -1], 100));
