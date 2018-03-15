window.firstName = "ok";

let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello() {

        setTimeout(()=>{
            console.log(this.firstName + " " + this.lastName);
        },400);
    }
};

person.sayHello();