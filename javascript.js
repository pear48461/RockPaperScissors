const x = Math.random();

function getComputerChoice() {
  if (x >= .66) {
    return "Rock";
  } else if (x <= .33) {
    return "Scissors"
} else {
    return "Paper";
  }
}

console.log(x);
console.log(getComputerChoice());

function getHumanChoice() {
    
}

//const string = String(window.prompt("Your choice here"))
