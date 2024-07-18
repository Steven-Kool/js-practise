const findLargestAgeDifference = (pairs) => {
  let largest = 0;
  if(pairs) {
    for(let i = 0; i < pairs.length; i++) {
      const diff = Math.abs(pairs[i][0] - pairs[i][1]);

      if(diff > largest) {
        largest = diff;
      }
    }
  }

  return largest;
}

console.log(findLargestAgeDifference([[5, 25], [26, 46], [47, 67], [68, 88], [89, 109]]));
