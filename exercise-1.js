const person = {
  get firstName() {
    return `${this.name}`;
  },
  set firstName(value) {
    this.name = value;
  },
  get lastName() {
    return `${this.lastname}`;
  },
  set lastName(value) {
    this.lastname = value;
  },
  get age() {
    return this.age;
  },
  set age(value) {
    this.age = value;
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
let john = Object.create(person);
john.firstName = "John";
john.lastName = "Doe";

let simon = Object.create(person);
simon.firstName = "Simon";
simon.lastName = "Collins";

console.log(john.fullName());
console.log(simon.fullName());
// John Doe
//console.log(simon.fullName()); // Simon Collins
