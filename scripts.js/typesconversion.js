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

//altro tipo di conversione da valore in stringa a valore numerico
//assegnandoli in questo caso una variabile ad una costante
const StrValue1 ='33';
const NumStrValue1 = Number (StrValue1);
console.log (typeof NumStrValue1);


//se volessimo convertire in numerico il valore di una stringa sola non nmerica, ci ritornerebbe NaN, ovvero valore non numerico
const NanValue = Number ('questa non è una stringa');
console.log (NanValue);
