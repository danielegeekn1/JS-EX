const person = {
  name: "Daniele",
  lastname: "Basile",
  age: 33,
  get firstName() {
    return this.name;
  },
  set firstName(value) {
    this.name = value;
  },
  get lastName() {
    return this.lastname;
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
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const john = Object.create(person);
john.name = "John";
john.lastname = "Doe";
john.fullName();
const simon = Object.create(person);
simon.name = "Simon";
simon.lastname = "Collins";
simon.fullName();
console.log(john.fullName()); // John Doe
//console.log(simon.fullName()); // Simon Collins
