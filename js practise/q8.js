const updateEmployeeSalary = (array, checkId, newSalary) => {
  for(const i of array) {
    if(i.id === checkId) {
      i.salary = newSalary;

      return i;
    }
  }

  return null;
}

console.log(updateEmployeeSalary([
    { id: 1, name: "John Doe", position: "Developer", salary: 60000,
    department: { name: "Development", location: "New York" } },
    { id: 2, name: "Jane Smith", position: "Designer", salary: 65000,
    department: { name: "Design", location: "San Francisco" } }
  ], 2, 65000));
