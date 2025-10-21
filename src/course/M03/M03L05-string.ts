/* eslint-disable no-console */

export {};

//Tworzenie stringów

const single = 'single quote';
const double = 'double quote';
const template = `template string`;
const multiLine = `This is a
multi-line
string`;

console.log(single);
console.log(double);
console.log(template);
console.log(multiLine);

//Łączenie stringów
const firstName = 'Rafał';
const lastName = 'testowy';
// operator +
console.log('My name is ' + firstName + ' ' + lastName);
// template string , string literals
console.log(`My name is ${firstName} ${lastName}`);
