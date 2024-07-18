const filterAndTransform = (array) => {
  const filtered = [];

  for(const arr of array) {
    if(arr.age >= 18) {
      filtered.push(arr);
    }
  }

  const result = filtered.map(person => {
    return `${person.name} is ${person.age} years old and loves ${person.hobby}.`;
  })

  return result;
}

console.log(filterAndTransform([
  { name: "Harry", age: 21, hobby: "" }
  ]));
