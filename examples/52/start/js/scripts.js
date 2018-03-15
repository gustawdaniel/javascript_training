import sort, { removeDuplicates, trim } from './utils/array.js';
import * as config from './config/constants.js';

let arr = [3,4,2,2,2,5];

console.log(sort(arr));
console.log(removeDuplicates(arr));

console.log(trim("   Piotr"));

console.log(config);
console.log(config.URL);