let numbers = [10, 20, 30, 40, 50];

numbers = [10];

let [first, second = 3, ...rest] = numbers || [];
//
console.log(first, second, rest);
