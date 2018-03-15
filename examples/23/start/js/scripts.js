class Collection extends Array {
    constructor(...args) {
        if(args.length === 1) {
            super(1);
            this[0] = args[0];
        } else {
            super(...args)
        }
    }
}

let col = new Collection(10);

let colPart = col.slice(0,2);

console.log(col);
console.log(colPart);
console.log(colPart instanceof Collection);
console.log(colPart instanceof Array);