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

//questo sistema serve in quanto previene JS da compiere operazioni non valide, semplicemente esse le reinderizzerà come NaN

//convertire una stringa in numerica ponendo tre spazi prima e tre dopo 
console.log(Number('   42   '));
//questa operazione di JS viene chiamata trimmare, si dice che JS in questo caso trimma gli spazi vuoti e prende come valore solo il numero

//ps se uniamo caratteri letterari e numerici JS riporterà NaN
console.log (Number('42o'));

//conversioni di tipo booleano da imparare cosi come sono
console.log(Number(true)); //questo reinderizzerà 1
console.log(Number(false));//questo reinderizzerà 0

console.log(Boolean(1));//questo reinderizzerà true
console.log(Boolean(0));//questo reinderizzerà false
