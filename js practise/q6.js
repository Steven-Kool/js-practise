const findUniqueCharacters = (str) => {
  let newString = "";
  const times = {};

  if(str) { 
    for(let i = 0; i < str.length; i++) {
      if(times[str[i]]) {
        times[str[i]]++;
      } else {
        times[str[i]] = 1;
      }
    }

    for(const i in times) {
      if(times[i] === 1) {
        newString += i;
      }
    }
  }

  return newString;
}

console.log(findUniqueCharacters("123412345"));
