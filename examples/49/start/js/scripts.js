var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    _age: 32
};

let proxy = new Proxy(person,{
    get(target, property, receiver) {
        console.log(target,property,receiver);

        if(property.startsWith("_")) {
            return undefined;
        }

        return Reflect.get(target, property, receiver);
    }
});

console.log(proxy.firstName);
console.log(proxy._age);

for(let prop in person) {
    console.log(prop);
}