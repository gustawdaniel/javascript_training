function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Object.defineProperty(Person.prototype, 'sayHello', {
//     enumerable: false,
//     value: function () {
//         return this.firstName + " " + this.lastName;
//     }
// });

Person.prototype.sayHello = function() {
    return this.firstName + " " + this.lastName;
};

// class Person {

//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     sayHello() {
//         return `${this.firstName} ${this.lastName}`;
//     }

// }

let person1 = new Person("Jan", "Kowalski");

for(let key in person1) {
    // if(person1.hasOwnProperty(key)) {
        console.log(key);
    // }
}

function createInstance(fromClass, ...args) {
    return new fromClass(...args);
}

let person2 = createInstance(Person, "Edward", "Kowalski");

console.log(person2);