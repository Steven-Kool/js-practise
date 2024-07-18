const findLongestWord = (str) => {
  const string = str.trim().replace(/\s+/g, ' ');
  const array = [];
  let longest;

  if(string && string.length > 0) {
    let single = "";
    for(let i = 0; i < string.length; i++) {
      if(string[i] !== " ") single += string[i];

      if(string[i + 1] === " " || i === string.length - 1) {
        array.push(single);
        single = "";
      }
    }

    longest = array[0];

    for(const i of array) {
      if(i.length > longest.length) {
        longest = i;
      }
    }
  }

  return longest;
}

console.log(findLongestWord("An exploration of quantum computing reveals intricacies within computational theories."));
