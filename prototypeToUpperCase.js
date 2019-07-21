//
// Add a method to the Person's prototype called "shoutName" that returns the person's name in all uppercase letters.
// 

function Person(name) {
  this.name = name;
}
Person.prototype.shoutName = function() {
  return this.name.toUpperCase();
}

/* Do not modify code below this line */

const john = new Person('John');
console.log(john.shoutName(), '<-- should be "JOHN"');
