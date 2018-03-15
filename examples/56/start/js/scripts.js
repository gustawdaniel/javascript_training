var arr1 = new Array(10);
var arr2 = Array.of(10);

console.log(arr1);
console.log(arr2);

let lis = document.querySelectorAll('li');

console.log(lis);

// lis = Array.from(lis);
lis = [...lis];

console.log(lis);

let numbers = [1,2,3,4,5];

console.log(numbers.fill(1, 2, 4));

let names = ["Ania","Piotr","Kasia","Tadeusz"];

console.log(names);

let women = names.find(value => value.endsWith("a"));

console.log(women);

let womenIndex = names.findIndex(value => value.endsWith("a"));

console.log(womenIndex);


names.copyWithin(3, 0, 4);
console.log(names);
