const isPalindrome = (str) => {
  let filtered = "";
  let reversed = "";

  for(const i of str) {
    if((i >= 'A' && i <= 'Z') || (i >= 'a' && i <= 'z') || (i >= '0' && i <= '9')) {
      filtered += i.toLowerCase();
    }
  }

  for(let i = filtered.length - 1; i >= 0; i--) {
    reversed += filtered[i];
  }

  return (filtered === reversed);
}

console.log(isPalindrome("12321! #@!12321"));
