let getName = function() {

    throw new Error("Error");

    return "Jan";

};

// console.log(getName.name);

let person = {
    getName: () => {
        throw new Error("err");
    }
};

let newFn = getName.bind(null);

// let getPersonName = new Function("", )