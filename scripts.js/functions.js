
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
console.log('Good ${time} ${name}');
};

talk2 ('there', 'Daniele');
//in this case we chosen to use 2 parameters for the same functions, that we invoked by using both of 2 arguments avaiable
