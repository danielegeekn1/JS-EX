/*function sum(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}*/
function sum(...numbers) {
  let total = 0;
  for (const arg of numbers) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
