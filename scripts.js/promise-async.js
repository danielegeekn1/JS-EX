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

//utilizzo promise con un'id come parametro
function Anime(character) {
  return new Promise((resolve, reject) => {
    if (character == "Rufy") {
      resolve(character + "is the best");
    } else {
      reject("There is no peace");
    }
  });
}
let bestAnime = Anime("Rufy"); // in questo modo passo come argomento della funzione 'Rufy'
bestAnime
  .then((name) => {
    console.log(`I have to admit  ${name}`);
  })
  .catch((err) => {
    console.log(`Help me${err}`); // se pongo un'argomento diverso allora mi dava la frase passata con reject
  });

//promise per impostare un setTimeout

function timeOut(Name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Name === "Gatsu") {
        resolve(Name);
      } else {
        reject("That is sad");
      }
    }, 2000);
  });
}

let surprise = timeOut("Gatsu");
surprise.then((Name) => console.log(`${Name} is the best`));
surprise
  .then((Name) => console.log(`${Name}, is also an hero`))
  .catch((err) => {
    console.log(err);
  });
// in questo caso la stringa 'Gatsu is the best è reinderizzata dopo 2 secondi
//in modo del tutto asincrono
// e solo dopo di essa verrà rappresentata l'altra frase segnata con il 'then', ovvero 'Gatsu is also an hero'

//async functions  in js with 'await'
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  //in questo caso stiamo indicando di aspettare 2 secondi prima di far partire la nostra funzione con la promise
  //la quale ha un timeout di 1 secondo, quindi solo dopo bisogna mostrarla
  // expected output: "resolved"
}

asyncCall();

//esempio async function
