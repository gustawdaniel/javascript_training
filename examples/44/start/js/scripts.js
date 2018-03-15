let person1 = {
    firstName: "Jan",
    lastName: "Kowalski",
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak",
};

let s = new Set([person1,person2]);

// s.add("Anna");
// s.add("Anna");
// s.add("Piotr");
//
// s.delete("Piotr");
//
// console.log(s.has("Piotr"));
// console.log(s.has("Anna"));
// console.log(s.clear());

s.delete(person1);

console.log(s);
console.log(s.size);

s.forEach(v=>console.log(v))

for(let e of s) {
    console.log(e);
}

let numbers = [1,2,1,0,3,4,1];

function removeDuplicates(arr) {
    return [...(new Set(arr))];
}

console.log(removeDuplicates(numbers));