const choices = ["rock", "paper", "scissors"];

function game() {
    for (let i = 1; i <= 5; i++); {
    playRound(); 
    }
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
}

function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
       input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
       input = prompt(
        "Type Rock, Paper, Scissors. Spelling needs to be exact, but capitalization does not"
       );
       while(input == null) {
       input = prompt('Type Rock, Paper, or Scissors');
    }
       input = input.toLowerCase();
       check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie";
    } else if (
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "scissors" && choiceC === "paper") || 
        (choiceP === "paper" && choiceC === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

game();