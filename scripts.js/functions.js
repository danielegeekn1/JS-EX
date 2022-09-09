
//function declaration
function greet (){
    console.log('Hello there');
}

greet ();
greet ();
greet ();

//function expression 
//in this case we have a variable, that is equal to the function

const speak = function (){
    console.log ('Good morning');
}; // function expression always have semi columns at the end 

speak ();

//arguments & parameters
const talk = function (name)// name is what we call function parameter
{
    console.log('Hello there ${name}');
};

talk ('Mario');//mario in this case, is what we call the argument of the function

//why ${name} is shown in terminal excatly like this and so it's not working??

const talk2 = function (name, time){
console.log('Hello there ${name} ${time}');
};

talk2 ('my', 'love');
//in this case we chosen to use 2 parameters for the same functions, that we invoked by using both of 2 arguments avaiable

//storing a variable, stored in local scope, in global scope as well in order to render the result as required

const calcArea = function (radius){
    let area = 3.14 * radius**2;
    return area;
}
const area = calcArea(5);
console.log(area);

//arrow functions
// in this case we do not need to add the function's name and we can add the arrow to add the function
const calcVol = (radius)  => {
    return 3.14* radius**2;
};
const vol = calcVol (5);
console.log ('area is:', area);// in this case we assigned vol to the function and said that the browser should log the result of the function afther the string area is

//if we have only one parameter we can remove the parentesys in this way
const calcSalary = salary  => {
    return 100 + salary*2;
};
const Salary = calcSalary(600);
console.log ('Your salay is:', Salary);

// if we have only one single line in the function we can remove the {} and also the return string
const calcMoney = money => 100 * money;
const Money = calcMoney(5);
console.log ('You earned', Money);

//method to invoke a function 
const Name ='Daniele';
let resultName = Name.toUpperCase();
console.log(resultName);// also in this case we associated a function to a variable, and then invoked it with toUpperCase method

//callback functions
const myFunction = (callbackFunction)=>{
    let value = 50;
    callbackFunction(value);
};

myFunction (function(value){
    console.log (value);
});// in this case we inserted a function in the parameter of another function, and invoked it with another function

//stessa funzione di sopra riportata con un arrow function
/*myFunction (value=>{
    console.log(value);
} );*/

//parametri delle funzioni, essenziali per capire i callback
let num = 10;
function prima (x){
    x = x - 5; // assegno al valore x segnato come parametro un valore
    console.log(x);//scelgo di mostrare il valore che ho assegnato ad x
}
prima (num); //in questo caso passo un variabile come valore del parametro della funzione
console.log(num);//scelgo di mostare il valore della variabile che ho passato come valore del parametro della funzione

//ex callback 
function test(x){
    return x * x;
}
console.log (test(10));//con questo indichiamo di mostrare il risultato della funzione test
console.log(test);// con questa diciamo di indicare solo il codice della funzione test

function principale (x, callback)//inserito callback function come parametro 
{
    console.log ('valore di x:', x);
    console.log (callback(50));//invocato callback e lo do come argomento 50 

}

principale (5, test);//test calcola il numero li abbiamo assegnato come argomento (50) * se stesso, difatti darà 2500
//il numero 50 li è stato assegnato in quanto è stato associato alla funzione callback in quella principale


//easy ex of callback function to set a time out ( that is why callbacks are most used)
let logCall = function (){
    console.log('logCall was called back');
};
setTimeout (logCall, 3000);//invoked a callback as parameter, after 3000 millisecond of time

//other way to set the Timeout, not the most standard way, by puttin as parameter function instead of logCall

//add a callback to add addEventListener
let btn = document.querySelector ("#item1");
btn.addEventListener ("click", function(e) //in this case, this function is valid whenever someone clicks on the button
{
    console.log("The button was clicked");
});