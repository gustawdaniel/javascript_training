// function *it() {
//
//     for(let i = 1; i<= 5; i++) {
//         yield i;
//     }
//
// }
//
// let iterator = it();
//
// console.log(iterator);
//
// for(let value of iterator) {
//     console.log(value);
// }

let it = {
    *[Symbol.iterator]() {
        let numbers = [1,2,3,4,5];
        for(let number of numbers) {
            yield number;
        }
    }
};

for(let value of it) {
    console.log(value);
}

function *range(from, to) {
    let i = from;
    while (i <= to) {
        yield i++;
    }
}

console.log([...range(1, 7)]);

for(let value of range(3,5)) {
    console.log(value);
}