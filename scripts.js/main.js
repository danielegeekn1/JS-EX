
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/* var pi = 3,14; // variable with number */
var pi = "3,14"; // variable with string

/*strict equality function */
if (pi ===  3,14) {
    console.log ("yes, that is pi");
}
else {
    console.log ("no, that is not pi");
}

/* not equal function */

var x = 10, y = 15;
document.write (!(x == y)); // it means x is not equal to y, in this case it will return true on the page

/*custom function */
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  /* event clicker on JS */
  const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}
/* with this syntax if mrSrc variable is different than the img selected, the img that will appear is firefox1, otherwise firefox2 */


const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

/*shortcut per la funzione con if e else, in questo caso ? corrisponde a if, mentre i : corrispondono a else */
strNewValue = (strValue = '42') ? 'Quarantadue': 'un altro numero';

/* se volessi creare più di 2 condizioni possiamo usare anche else if */
 if (strValue === '42'){strNewValue = 'quarantadue';}
else if (strValue === '45'){strNewValue ='quarantacinque';}
else {strNewValue = 'un altro numero';}

  /*ciclo while con do, per indicare un'azione da fare prima, poi il while per indicare quando farla */
  counter = 0;
  do {console.log ('valore di counter (do while)', counter);counter++;} 
  while (counter === 0);

  /*OPERATORI DI CONFRONTO*/
  console.log (42>10); // in qst caso il 42 sarà confrontato in modo che sia maggiore di 10 
  //ovviamente in questo contesto verrà reinderizzato true, in quanto ovviamente 42 è maggiore di 10

  /*confronto fra valori in stringa*/
  console.log ('S' > 'B'); // in questo caso S viene dopo B nell'alfabete e è quindi considerato un valore maggiore
  
