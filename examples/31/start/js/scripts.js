let it = {
    [Symbol.iterator]() {
        var numbers = [1, 2, 3, 4, 5],
            index = 0;

        return {
            next: function() {
                return {
                    done: index === numbers.length,
                    value: numbers[index++]
                };
            }
        };
    }
};

let iterator = it[Symbol.iterator]();

// for(var o = iterator.next(); o.done !== true; o = iterator.next()) {
//
//     console.log(o.value);
//
// }

for(let value of it) {
    console.log(value);
}

for(let ch of "PIOTR") {
    console.log(ch);
}

lis = document.querySelectorAll('.edu-content ul li');

console.log(lis);
console.log(lis.constructor);

for(let li of lis) {
    console.log(li);
    li.style.color = `#FF0000`;
}

for (let obj in lis) {
    console.log(obj);
}

lis.forEach((e) => {
    console.log(e);}
);