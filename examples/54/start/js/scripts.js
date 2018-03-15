import { getValue, setValue, obj } from './functions.js';
import { obj as obj2 } from './objects.js';

console.log(getValue());

setValue(20);

console.log(getValue());

getValue.call = function () {
    return 40;
};

console.log(getValue.call());
console.log(getValue());

console.log(obj === obj2);
console.log(Object.is(obj,obj2));
