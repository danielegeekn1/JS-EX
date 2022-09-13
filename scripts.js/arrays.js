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
		BestAnimeEver.splice(3,0, 'Soul eater'); 

		console.log ( BestAnimeEver);//reinderizzerà tutti gli elementi 								e poi ‘Soul eater’

// metodo per spostare elementi da un'array a un'altro con 'slice'
let BestFantasyMovies = ['Lord of the rings', 'Hobbit', 'Never-ending story', 'The Chronicles of Narnia'];
let BfM = BestFantasyMovies.slice(2, 4);
	
	console.log (BfM);

    //concatenare elementi ad un'array con 'concat'
    let BestCities = ['Ala', 'Moscheri', 'Villa lagarina'];
	let BestCitiesEver = BestCities.concat('Mezzolombardo', 'Braies');

    console.log (BestCities);//trasmetterà Ala, Moscheri e Villa Lagarina
    console.log (BestCitiesEver);//oltre alle città sopra riportate trasmetterà Mezzolombardo e Braies

//metoo per controllare la posizione di un'elemento in un'array con indexOf
let worstCities = ['California', 'Los Angeles', 'Lagos'];
console.log(worstCities.indexOf('Los Angeles'));

//metodo per controllare la posizione di un'elemento in un'array partendo dalla coda con lastIndexOf
let BestRecipies = ['Carbonara', 'Pizza', 'Vitel Tunè','Amatriciana'];
	console.log(BestRecipies.lastIndexOf('Pizza'));

    
    //metodo trovare elemento con find
    let navItems=['home', 'about', 'story', 'contacts'];
	let items = navItems.find (items => items =='home');
	console.log (items);
//come reinderizzare più specifici elementi di un'array grazie a 'filter'
let PersonNames =['Daniele', 'Franco', 'Giovanni']

	let newItems = PersonNames.filter (item => item == 'Franco' || item == 'Daniele'); 
		console.log (newItems); 

    //aggiungere un valore ad ogni singolo elemento di un'array con 'map'
    let MangaCharacters = ['Rufy', 'Kenshin', 'Gatsu', 'Naruto','Sasuke'];
	let MangaCharactersMap = MangaCharacters.map((item) =>{
		item += 'chan';
		return item;});

	console.log (MangaCharactersMap);

    //metodo per mutare una singola stringa in un'array con 'split'
    let MyBF = 'Muslim, Federica, Radim';
	let splitMyBF = MyBF.split(" ");
    console.log (splitMyBF);

    console.log(splitMyBF.join(" "));


