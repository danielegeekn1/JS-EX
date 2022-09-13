function callback (callbackfunction){
    return callbackfunction
}
function prova (){
    return callback('stringa1')
}

console.log(prova());

const arrowfunction = () => {
    return callbackfunction1 (10)
}
function callbackfunction1 (sum){
return sum -1
}
console.log(arrowfunction());

function person (daniele){
   return daniele }

function arrowPerson (){
    return person (10)
}
console.log (arrowPerson());