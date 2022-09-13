//dichiarare un'array tramite una variabile

let heroes =['Batman', 'Joker', 'Enigmista'];

//dichiarare un'array tramite l'operatore new

let otherHeroes = new Array ('Batman', 'Joker', 'Enigmista');

//utilizzo parola chiave 'pop' per rimuover un elemento di un'array da una collezione e spostarla in un'altra
let Heroes =['Batman', 'Joker', 'Enigmista'];

let lastHeroes = Heroes.pop();

//metodo per aggiungere invece un'elemento ad una collezione di un'array con la parola chiave 'push'

heroes.push('Green Arrow');//in questo caso per esempio stiamo aggiungendo ad heroes l'elemento 'Green Arrow'


//metodo per rimuovere un'elemento in testa ad una lista con la parola chiave 'shift'
let DragonBallEnemy = ['Majin bu', 'Freezer', 'Cell'];
let otherEnemy = DragonBallEnemy.shift();

console.log(otherEnemy);

//e' possibile poi rispostare l'elemento rimosso dalla testa di una lista in un'altro array, tramite l'utilizzo di unshift
otherEnemy.unshift('Majin bu');
