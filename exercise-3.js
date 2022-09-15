const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  
  students.push(student);

}

addStudent('Marco');
console.log(students);

//non abbiamo aggiunto direttamente alla costante students, un'altro elemento
//lo abbiamo fatto tramite una funzione, che prende come parametro il valore da aggiungere ad esso
//per questo è possibile in questo caso modificare una costante readonly