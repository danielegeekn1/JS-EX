
//ex1callbackfunction con bernard

function callback (callbackfunction){
    return callbackfunction
}
function prova (){
    return callback('stringa1')
}

console.log(prova());

//ex2callbackfunction scritta come arrowfunction con bernard
const arrowfunction = () => {
    return callbackfunction1 (10)
}
function callbackfunction1 (sum){
return sum -1
}
console.log(arrowfunction());

//ex3callback functions
function person (daniele){
   return daniele }

function arrowPerson (){
    return person (10)
}
console.log (arrowPerson());

//ex4callback functions
