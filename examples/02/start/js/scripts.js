(function() {

    console.log( typeof lastName );

    {
        let lastName = "Kowalski";
    }

    let fns = [];

    for( let i = 0; i < 10; i++) {
        fns.push(function () {
            console.log("Value i " + i);
        })
    }

    console.log(fns[3]());

    const person = {
        firstName: "JAN",
        lastName: "Kowalski"
    };

    delete person.firstName;

    const url = "AAA";

    url.concat("sss");

    console.log(person);
    console.log(url);

})();