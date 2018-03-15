// let getName = function() {
//     return "Jan";
// };

// let getName = function(kid) { return kid ? "Jaś" : "Jan"; };
// let getName = kid => kid ? "Jaś" : "Jan";

let getObject = () => ({firstName: "JAN"});

function getArgs() {


    let args = () => {
        console.log(arguments);
    };

    args()

}

console.log(getObject());

console.log(getArgs(1,1,1));

let arr = [10,22,12,4,0,67,34];

let gt20 = arr.filter(v => v >= 20);

console.log(gt20);