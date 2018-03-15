let lis = eQuery("li");

console.log(lis);

lis.attr('style', 'color: red;');

console.log(lis.get());

// for(let li of lis) {
//     console.log(li);
// }

// lis.each(e => console.log(e));

console.log(lis.attr('style'));