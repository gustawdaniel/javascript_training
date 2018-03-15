import { obj } from './objects.js';

let value = 10;

export function getValue() {
    return value;
}

export function setValue(newValue) {
    value = newValue;
}

export { obj };