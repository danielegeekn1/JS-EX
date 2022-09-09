
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


