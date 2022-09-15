/*const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',
  // ...
}*/

//inserire i metodi 'fullName' e 'info' all'interno dell'oggetto person 
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age:25,
  job: 'Web Developer',

  fullName(){
    return this.firstName + " " + this.lastName;
  },
  info (){
    return this.age + " " + this.job;
  }
 

  }
 


console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer

