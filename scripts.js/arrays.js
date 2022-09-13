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
DragonBallEnemy.unshift('Majin bu');

//per verificare la quantità di elementi presenti in un'array è possibile farlo tramite l'utilizzo della proprietà 'lenght'
console.log(DragonBallEnemy.length);

//per svuotare invece un'array completamente possiamo fare in questo modo 

DragonBallEnemy.lenght = 0;
console.log (DragonBallEnemy);

//per richiamare un preciso elemento di un'array, si può fare indicando il numero dentro le parentesi quadre
//importante considerare che si inizia a contare il numero degli elementi partendo dallo 0
DragonBallEnemy[1];

// possiamo usare questo sistema per iterare singoli elementi di un'array con un loop
let RufyEnemy = ['Don Flamingo', 'Trafalgar Law', 'Eneru'];
function Anime (){
    for (i=0; i < RufyEnemy.length; i++){
        console.log(RufyEnemy[1]);
    }
}
console.log(Anime());



//rimuovere un'elemento con 'splice'
let BestManga =['One piece', 'Berserk', 'Vagabond'];	
BestManga.splice(1,1 );
console.log(BestManga);

//aggiungere semplicemente un'elemento con 'splice'
let BestAnimeEver = ['NarutoShippunden', 'Dragon Ball-1st season', 'Shaman king'];
		let ani = BestAnimeEver.splice(3,0, 'Soul eater'); 

		console.log ( BestAnimeEver);//reinderizzerà tutti gli elementi 								e poi ‘Soul eater’
