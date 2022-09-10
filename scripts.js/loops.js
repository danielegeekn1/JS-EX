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
//ciclo for con parola chiave break
for (let counter = 0; counter < 10; counter++){
    if (counter === 5)break; //questa parola chiave interromperà qua il ciclo,quando raggiunge il valore di 5
    console.log ('Valore di counter (break)', counter);
}

//ciclo for con parola chiave continue
for (let counter = 0; counter < 10; counter++){
    if (counter === 5) continue; //in questo caso con questa parola chiave si interromperà ciclo qua, sul 5, poi continuerà dal 6
    console.log('valore di counter (continue)', counter);}


    //for loops with index to show more element of an array
var fruits = ["mango", "banana", "peach"];
for (var i = 0; i < 3; i++ ){
    console.log(fruits[i]);// [i] is the index, that indicates the number of the elements in the array, since we put less than 3, it'll count til that number

}
//this loops will show all elements of the array var fruits

//this operation has as a limit 3, but what if we want to loop to have no limit?we could do it like this
var vegetables = ["peppers", "aubergine", "eggplant", "tomato", "carrots", "spinach"];
for (var i = 0; i < vegetables.length; i++)//lenght will show all elements of the array, until you put one, it'll render that element
{
    console.log (vegetables[i]);
}

//loop through object, that doesn't have index
var data = {
    name:"John",
    age: 28,
    maritalStatus:true
}
for (var elem in data) {
    console.log(elem, data[elem]);//elem will show all element inside the var data, and data all the value of that element
}
//that'll print out the whole content of var data
