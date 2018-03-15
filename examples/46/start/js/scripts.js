let person1 = {
    firstName: "Jan",
    lastName: "Kowalski",
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak",
};

// let age = new Map();
//
// age.set(person1,22);
// age.set(person2,16);

let age = new Map([[person1,22],[person2, 16]]);

console.log(age);
console.log(age.get(person2));

console.log("=".repeat(70));

for(let [person,personAge] of age.entries()) {
    console.log(person);
    console.log(personAge);
}

age.set(person1,100);

for(let value of age.values()) {
    console.log(value);
}

for(let obj of age.keys()) {
    console.log(obj);
}

console.log(age.size);
