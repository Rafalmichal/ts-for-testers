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

//zamiana stringów
// na wielkie i male litery
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

//zamiana znaków/słów
const text = 'Hello, I am learning TypeScript';
console.log(text.replace('TypeScript', 'JavaScript'));
console.log(text.replaceAll(' ', '_'));

//powtarzanie stringów
const laugh = 'ha';
console.log(laugh.repeat(5));

//długość stringa
console.log(laugh.length);

// dopełnienie stringa w jednej linii
// najpierw dodaj 5 '*' z przodu (wydłuża string do length + 5), potem dopełnij do length + 10, żeby dodać 5 '!'
console.log(firstName.padStart(firstName.length + 5, '*').padEnd(firstName.length + 10, '!'));

//usuwanie białych znaków
const titleFromWebsite = '   Learn TypeScript !  ';
console.log(titleFromWebsite);
console.log(titleFromWebsite.trim());
