class Classe {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullName() {
    return `I am ${surname}`;
  }
}
let newClass = new Classe();
const Create = Object.create(Classe);
Create.name = "John";
Create.lastName = "Simon";
console.log(Create);

/*let newClass = new Classe("Daniele", "Basile", 33);
console.log(newClass);*/
