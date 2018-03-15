let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49
};

function getData() {
    return {firstName:"Janek", other: "x"};
}

let firstName, lastName, age, x;

({firstName, lastName, age, other: x} = Object.assign({}, person, getData()));

console.log(firstName, lastName, age, x);