function calculate(type, ...args) {

    const calculations = {
        sum: (a,b) => a+b,
        mul: (a,b) => a*b
    };

    return args.reduce(calculations[type]);
}

console.log(calculate("sum", 2, 22, 3, 7, 13));
console.log(calculate("mul", 2, 22, 3, 7, 13));

