class Model {

    constructor(data = {}) {
        this.data = data;
    }

    get(prop) {
        return this.data[prop];
    }

    set(prop, value) {
        this.data[prop] = value;
    }

}

class Collection {

    constructor(models) {

        this.models = [];

        if( Collection.hasIterator(models) ) {
            this.populate(models);
        }

    }

    populate(models) {

        for(let model of models) {
            this.models.push( new Model(model) );
        }

    }

    [Symbol.iterator]() {
        let models = this.models,
            index = 0;

        return {
            next: function () {
                return {
                    done: index === models.length,
                    value: models[index++]
                }
            }
        }
    }

    static hasIterator(obj) {
        return obj && typeof obj[Symbol.iterator] === "function";
    }

}

const USERS = window.USERS;

console.log(USERS);

let users = new Collection(USERS);

for(let user of users) {
    console.log(user.get("email"));
}

console.log([...users]);

[...users]
    .filter(u => u.get("email").endsWith('.biz'))
    .forEach(u => u.set("email", u.get('email').replace('.biz','.xyz')));

console.dir([...users]);


for(let user of users) {
    console.log(user.get("email"));
}