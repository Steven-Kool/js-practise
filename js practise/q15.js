const customSort = (arr) => {
  const times = {};

  if(arr) {
    for(const i of arr) {
      times[i] = (times[i] || 0) + 1;
    }

    for(let i = 0; i < arr.length; i++) { 
      for(let j = 1; j < arr.length - i; j++) {
        let swamp = false;
        if((times[arr[j - 1]] < times[arr[j]]) || (times[arr[j - 1]] === times[arr[j]] && arr[j - 1] > arr[j])) {
          swamp = true;
        } else {
          swamp = false;
        }

        if(swamp) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
      }
    }
  }

  return arr;
}

console.log(customSort([]));
