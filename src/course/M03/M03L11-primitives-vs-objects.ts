/* eslint-disable no-console */
export {};

// Primitive types
const number: number = 10;
const name: string = 'Rafał';
const isActive: boolean = false;

console.log('Primitive Types:');
console.log('Number:', number);
console.log('String:', name);
console.log('Boolean:', isActive);

if (isActive) {
  console.log(`${name} is active.`);
}

// Object wrappers
const newNumber = new Number(10);
const newName = new String('Rafał');
const newIsActive = new Boolean(false);

console.log('\nObject Wrappers:');
console.log('Number Object:', newNumber);
console.log('String Object:', newName);
console.log('Boolean Object:', newIsActive);

console.log(typeof newNumber);
console.log(typeof newName);
console.log(typeof newIsActive);

if (newIsActive) {
  console.log(`object Boolean is truthy.`);
}

// rzutowanie typów - string

console.log('rzutowanie typów - string');
const numberToString = 123;
const booleanToString = true;
const booleanFalseToString = false;

console.log(String(numberToString)); // "123"
console.log(String(booleanToString)); // "true"
console.log(String(booleanFalseToString)); // "false"

// rzutowanie typów - number
console.log('rzutowanie typów - number');
console.log(Number('42')); // 42
console.log(Number('')); // 0
console.log(Number('abc')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// rzutowanie typów - boolean
console.log('rzutowanie typów - boolean');
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean('abc')); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
