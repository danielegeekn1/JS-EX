class Person {
  // ...
  constructor(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
  }
  get firstName() {
    return `${this.name}`;
  }
  set firstName(value) {
    this.name = value;
  }
  get lastName() {
    return `${this.surname}`;
  }
  set lastName(value) {
    this.surname = value;
  }
  get age() {
    return `${this.age}`;
  }
  set age(value) {
    this.age = value;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName());

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName());
