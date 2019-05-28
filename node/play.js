const aGreatNumber = 10;

{
    let aGreatNumber = 42;
}

setTimeout(() => {
    console.log(aGreatNumber);
}, 1000);

console.log("Waiting...");
