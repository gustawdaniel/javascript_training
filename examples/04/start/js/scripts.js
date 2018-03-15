let firstName = "Jan",
    lastName = "Kowalski";

let fnName = "getFullName";

let person = {
    firstName,
    lastName,
    [fnName]() {
        return this.firstName + " " + this.lastName

    }
};

console.log(person);
console.log(person.getFullName());