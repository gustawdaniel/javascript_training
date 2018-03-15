const hidden = Symbol("ściśle tajne");
const hidden2 = Symbol("ściśle tajne");

let person = {
    [hidden]: "1232465767565",
    [hidden2]: "1232465767565"
};

console.log(hidden);

console.log(typeof hidden);

console.log(person);

for(let key in person) {
    console.log(key);
}

console.log(person[hidden]);

const FORMAT = Symbol("format()");

class Person {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    sayHello() {
        return this[FORMAT](`${this.a} ${this.b}`);
    }

    [FORMAT](text) {
        return text.toUpperCase();
    }
}

let person1 = new Person("Jan", "Kowalski");

console.log(person1.sayHello());

console.log(person1[FORMAT](person1.sayHello()));