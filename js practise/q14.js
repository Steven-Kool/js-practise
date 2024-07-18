const canFormPalindrome = (string) => {
  const filtered = [];
  const times = {};
  const check = /[a-z0-9]/i;
  let unmatchCount = 0;

  if(string && string.length > 0) {
    for(const str of string) {
      if(check.test(str)) {
        filtered.push(str.toLowerCase());
      }
    }
  }

  for(let i = 0; i < filtered.length; i++) {
    if(times[filtered[i]]) {
      times[filtered[i]]++;
    } else {
      times[filtered[i]] = 1;
    }
  }

  for(const val in times) {
    if(times[val] % 2 !== 0) {
      unmatchCount++;
    }
  }

  return unmatchCount <= 1;
}

console.log(canFormPalindrome("aA    %$Bb *C))00 a#a"));
