function Person(firstName, lastName) {

function fullName (){
  return `${firstName} ${lastName}`;
  
}
return fullName;
}

let john = new Person (John, Doe);
let simon = new Person (Simon, Collins);

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins