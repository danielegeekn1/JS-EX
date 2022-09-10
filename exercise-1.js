/*const sum = function (a, b) {
  return a + b;
}*/

//la prima varabile const sum, scritta come un'arrow function
const sum = (a, b) => {
return a + b;
};
console.log (sum (10, 2));
/*const log = function (value) {
  console.log(value);
}

log(sum(2, 5));*/
//seconda funzione di const log riportata come un'arrow function
const log = value => {
  console.log(value);
};
log (1000);