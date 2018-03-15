console.log(Number.parseInt("20px"));
console.log(Number.parseFloat("20.0px"));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(isNaN(undefined));

console.log(Number.isFinite(20));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(undefined));
console.log(Number.isFinite(0));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite("20"));

console.log("=".repeat(70));

console.log(Number.isInteger(20.05));
console.log(Number.isSafeInteger(20));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);

