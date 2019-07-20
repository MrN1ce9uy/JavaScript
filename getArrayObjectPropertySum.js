//
// A For Each loop to get the sum of properties of objects in an array
// 

function getArrayObjectsSum(array) {
  let countSalary = 0;
  array.forEach((person) => { // arrow function used
    countSalary += person.salary});
  return countSalary; 
};

// the arrow function above can be used, or the regular function below will do the same thing

/*
function getArrayObjectsSum(array) {
    let countSalary = 0;
    array.forEach(function(person) {  // regular function used
        countSalary += person.salary} );
        return countSalary;
};
*/

const employees = [
    { name: 'Noah', salary: 60000 },
    { name: 'Liam', salary: 80000 },
    { name: 'Emma', salary: 55000},
    { name: 'Sophia', salary: 120000 }
];

console.log(getArrayObjectsSum(employees)); // Sum salary of employees array equals 315000
