/* eslint-disable no-console */
export {};

const a = 30;
const b = 10;
const price = 19.99;

console.log(a);
console.log(price);

//operacje matematyczne
console.log(a + b); // dodawanie
console.log(a - b); // odejmowanie
console.log(a * b); // mnożenie
console.log(a / b); // dzielenie
console.log(a % b); // modulo (reszta z dzielenia)

//maksymalne i minimalne wartości
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//rzutowanie typów
const ten = '10';
console.log(parseInt(ten)); // zamiana stringa na liczbę całkowitą
console.log(Number(ten)); // zamiana stringa na liczbę (całkowitą lub zmiennoprzecinkową)
