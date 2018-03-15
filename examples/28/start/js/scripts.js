// const hidden = Symbol("hidden");

// (function () {
const hidden = Symbol.for("hidden");
// })();


let person = {
    [Symbol.for("hidden")]: "123jkasdKhasdf$901-123",
    getSecret() {
        return this[Symbol.for("hidden")];
    }
};

console.log(Symbol.keyFor(hidden));

console.log(person);
console.log(person.getSecret());

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person)[0]);