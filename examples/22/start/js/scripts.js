// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };
//
// function Employee(firstName, lastName, position) {
//     Person.call(this, firstName, lastName);
//     this.position = position;
// }
//
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;
//
// Employee.prototype.sayHello = function () {
//     var name = Person.prototype.sayHello.call(this);
//
//     return name + " " + this.position;
// };
//


class Name {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello() {
        return this.firstName;
    }
}

class Person extends Name {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }

    sayHello() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    sayHello() {
        return super.sayHello() + " " + this.position;
    }
}

var employee1 = new Employee("Jan", "Kowalski", "Programista");

console.log(employee1);
console.log(employee1.sayHello());