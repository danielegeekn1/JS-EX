let numberStore = [0, 1, 2];
let newNumber = 3;
/*numberStore.push(newNumber);*/

//associare a newNumber un valore iterabile
//let newNumber = [3];
numberStore = [...numberStore, newNumber];

console.log(numberStore);
