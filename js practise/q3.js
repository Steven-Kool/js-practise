const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVowelsAndConsonants = (str) => {
  const string = str.replace(/\s+/g, '').toLowerCase();
  const result = {vowels: 0, consonants: 0};

  if(string && string.length > 0) {
    const array = string.split('');
    for(const i of array) {
      if(vowels.includes(i)) {
        result.vowels++;
      } else {
        result.consonants++;
      }
    }
  }

  return result;
}

console.log(countVowelsAndConsonants("DataStructuresAndAlgorithms"));
