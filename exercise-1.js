let personName = "Paul";

function canPlay() {
  if (true) {
    return (personName += " plays football"); // Argh! personName is not defined
  }
}

console.log(canPlay());
