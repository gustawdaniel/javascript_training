let numbers = [1, 3, 5, 11, 9, NaN, -0, {}];

console.log(numbers.indexOf(NaN));
console.log(numbers.includes(NaN));
console.log(numbers.includes(+0));
console.log(numbers.includes({}));