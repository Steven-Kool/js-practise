const mergeSortedArrays = (arr1, arr2) => {
  const array = [];
  let i = 0, j = 0;

  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length) {
    array.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    array.push(arr2[j]);
    j++;
  }

  return array;
}

console.log(mergeSortedArrays([-10, 1, 2, 3, 4, 50, 60, 70, 100, 110], [-5, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125]));
