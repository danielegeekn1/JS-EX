//convertire una valore di una variabile da booleano a stringa
 //dichiariamo prima il valore booleano alla variabile
let BoolValue = true;
console.log (typeof BoolValue);
    //poi tramite questo passaggio possiamo convertire il valore della variabile da booleano  a stringa
BoolValue = String(BoolValue);
console.log (typeof BoolValue);

//questa variabile ha come valore una stringa ( fra gli apici è considerata tale, per quanto numero interno è numero)
const strValue = '42';
console.log (typeof strValue);