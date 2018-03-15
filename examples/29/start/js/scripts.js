/*

- Symbol.hasInstance
- Symbol.toPrimitive
- Symbol.toStringTag
- Symbol.isConcatSpreadable
- Symbol.species
- Symbol.match, Symbol.replace, Symbol.search, Symbol.split
- Symbol.unscopables
- Symbol.iterator

*/

class Person {

    constructor(firstName, lastName) {

        if(new.target === Person) {
            throw new Error("Klasa Person nie może być użyta bezpośrednio.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

    static [Symbol.hasInstance](obj) {
        return false;
    }

}

class Employee extends Person {

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    sayHello() {
        return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`;
    }

    static [Symbol.hasInstance](obj) {
        return obj.constructor === Employee;
    }

    // get [Symbol.toStringTag]() {
    //     return this.sayHello();
    // }

    [Symbol.toPrimitive]() {
        return this.sayHello();
    }
}

let employee1 = new Employee("Jan", "Kowalski", "programista");




console.log(employee1 instanceof Employee);
console.log(employee1 instanceof Person);

console.log("Object is " + employee1);