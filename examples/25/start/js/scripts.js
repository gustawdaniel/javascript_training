class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

    static inherit(obj) {
        Object.setPrototypeOf(obj, Person.prototype);
    }

}

const employee1 = {
    firstName: "Jan",
    lastName: "Kowalski",
    position: "programista",
    sayHello() {
        // let name = Object.getPrototypeOf(this).sayHello.call(this);

        return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}`
    }
};

Person.inherit(employee1);


console.log(employee1);
console.log(Person.prototype.sayHello.call(employee1));
console.log(employee1.sayHello());
