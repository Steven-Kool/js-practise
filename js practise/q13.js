const compressString = (str) => {
  let current = str[0];
  let count = 1;
  let result = "";

  for(let i = 1; i < str.length; i++) {
    if(current === str[i]) {
      count++;
    } else {
      result += current + (count > 1 ? count : "");
      current = str[i];
      count = 1;
    }
  }

  result += current + (count > 1 ? count : "");

  return result;
}

console.log(compressString("111143332222333111"));
