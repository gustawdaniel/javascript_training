// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// Person.prototype.sayHello = function () {
//     return this.firstName + " " + this.lastName;
// };
//
// let person1 = new Person("Jan", "Kowalski");
//
// console.log(person1, person1.sayHello());

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

let person1 = new Person("Jan", "Kowalski");

console.log(person1, person1.sayHello());
