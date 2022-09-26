//dichiarazione promise con utilizzo 'then' e 'catch'

function test() {
  return new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 3) {
      resolve("La matematica è logica");
    } else {
      reject("è meglio affidarsi a Paolo Fox");
    }
  });
}
let promise = test();
promise
  .then((message) => {
    console.log("Vabbè, in ogni caso" + message); //l'argomento message si riferisce al valore passato con il resolve
  })
  .catch((message) => {
    console.log("Forse forse" + " " + message);
  });
