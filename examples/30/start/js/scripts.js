// const it = function () {
//
//     var numers = [1,2,3,4,5],
//         index = 0;
//
//     return {
//         next: function () {
//             return {
//                 done: index === numers.length,
//                 value: numers[index++]
//             }
//         }
//     }
// };

let it = {
    [Symbol.iterator]() {
        var numers = [1,2,3,4,5],
            index = 0;

        return {
            next: function () {
                return {
                    done: index === numers.length,
                    value: numers[index++]
                }
            }
        }
    }
};

let iterator = it[Symbol.iterator]();

for(let o = iterator.next(); o.done !== true; o = iterator.next()) {
    console.log(o);
}