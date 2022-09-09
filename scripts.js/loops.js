//while loops 
let counter = 0;
while (counter < 10){
    console.log ('valore di counter (while)', counter); //con questo si dice di mostrare la stringa fra gliapici e il valore counter
    counter++;//con questo diciamo al browser di aggiungere sempre un valore a quello di counter, fino a raggiungimento loop va avanti

}

//ciclo do while
counter = 0;
do {
    console.log ('Valore di counter (while)', counter);
    counter++;
}
while (counter === 0);
//con questa operazione diciamo che la variabile counter è uguale a 0, e finche rimane tale fai console log di quello riportato

//ciclo for
for (let counter = 0; counter < 10; counter++)//parametri da poter inserire nel ciclo for
{
    console.log('valore di counter(while)', counter);
}