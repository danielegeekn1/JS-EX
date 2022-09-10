/*const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}*/

//trasformazione variabili funzioni, in arrow functions e concatenarle
//const sum
const sum = (a, b) => {
  return a + b; 
}

//const subtract
const subtract = (a, b)=>{
  return a - b;
}

//const multiply
const multiply = (a, b) =>{
  return a * b;
}

//const divide
const divide = (a, b) =>{
  return a / b;
}

//funzione con const log per concatenare tutte le funzioni in modo che appare il seguente risultato 
//risultato della seguente operazione matematica: `((2 + 4) * (5 + 2) - 2) / 5`
const log = (sum, subtract, multiply, divide) =>{
  return sum.concat(subtract).concat(multiply).concat(divide);
}
console.log (sum(2, 2) * subtract(8, 4) / multiply(16, 1)+ divide(7, 1));