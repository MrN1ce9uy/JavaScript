function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    Person.prototype.isLegalDriver = function() {
        return this.age >= 16;
    }
    
    /* Do not modify code below this line */
    
    const youngPerson = new Person('Jane', 15);
    console.log(youngPerson.isLegalDriver(), '<-- should be false');
    
    const olderPerson = new Person('Joan', 16);
    console.log(olderPerson.isLegalDriver(), '<-- should be true');