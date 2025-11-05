/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */
export {};

const a = null;
const b = undefined;

console.log(typeof a); // "object"
console.log(typeof b); // "undefined"
console.log(a == b); // true
console.log(a === b); // false

//advice never use evil twins ==
