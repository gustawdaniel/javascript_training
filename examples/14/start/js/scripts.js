let numbers = [10, 20, 30, 40, 50];

// let first = numbers[0];
// let second = numbers[1];

let [first, second] = numbers;

console.log(first, second);

let a = 1,
    b = 2;

console.log(a, b);

// [a, b] = [b, a];

a = [b, b = a][0];

console.log(a, b);