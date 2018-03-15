let numbers = [12, 3, 9, 22, 11, 6];

console.log(Math.max(...numbers));

let numbers2 = [2, 33, 19, ...numbers, 1, 75];

console.log(numbers2);

function strToArr(string = "") {
    // return string.split("");
    return [...new Array(4)].map((e,i)=>i+1);
}

console.log(strToArr("Daniel"));