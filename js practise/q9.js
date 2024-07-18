const rotateArray = (array, time) => {
  let i = 0;

  if(array && array.length > 0) {
    while(i < time) {
      for(let i = array.length - 1; i > 0; i--) {

        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }

      i++;
    }

    return array;
  }

  return [];
}

console.log(rotateArray([-1, -2, -3, -4, -5], 2));
