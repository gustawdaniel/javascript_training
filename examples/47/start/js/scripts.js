let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let age = new WeakMap([[person1, 32],[person2, 22]]);

person1 = null;

const Person = (function () {
    const privateData = new WeakMap();

    return class Person {

        constructor(firstName, lastName) {
            privateData.set(this, { firstName, lastName });
        }

        sayHello() {
            let data = privateData.get(this);
            return `${data.firstName} ${data.lastName}`;
        }

    }
})();


console.log(age.has(person1));
console.log(age);

person3 = new Person("Edyta","Majewska");

console.log(person3.firstName);
console.log(person3.sayHello());