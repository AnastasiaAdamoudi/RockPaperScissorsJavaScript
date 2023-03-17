//PLAN
//make html and js and link Y

//Ask the user for input - store it in variable Y
//if user doesn't choose rock paper or scissors, ask again. Y
//Computer generates random input - store in variable
/*Compare user input against random input - different conditions for each option 
    - Rock beats scissors
    - Scissors beats paper
    - Paper beats rock*/
//Keep a score for each round to use in loop - decide on number of rounds
//When someone wins or loses overall return the result
//Ask user if they want to play again
//Ask if they want to change user


// Task 7 - get username (come back to make it only up to 10 characters)
let userName = prompt("Enter your name");

// Task 3 - get user input
let userInput = prompt(`Hello ${userName}, enter your choice of Rock, Paper or Scissors`);

function checkUserInput() {
    let result = true;
    if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
        console.log(`You chose ${userInput}`);
    }
    else { result = false;
        //prompt(`Please choose either Rock, Paper or Scissors, ${userName}`);
    }  
    return result;
}

/*let counter = 0;
while (checkUserInput() === false || counter < 5) {
    userInput = prompt(`Sorry ${userName}, you need to enter Rock, Paper or Scissors`);

}

if (counter === 6) {
    console.log(`Sorry ${userName}, you've tried too many times, it looks like you don't want to play.`);
}*/

if (checkUserInput() === true) {
    console.log("The game starts!");
}

// Task 4 - computer input
let computerChoices = [ "Rock", "Paper", "Scissors" ];
function computerInputGenerator(myArray) {
    return Math.floor(Math.random() * myArray.length);
}
console.log(computerChoices[computerInputGenerator(computerChoices)]);
let computerInput = computerChoices[computerInputGenerator(computerChoices)];

//Task 2 functions for win or lose
function getWinner(player1, player2) {
    let roundResult = 0;
    if ((player1 === "Rock" && player2 === "Rock") || (player1 === "Paper" && player2 === "Paper") || (player1 === "Scissors" && player2 === "Scissors")) {
        roundResult = 0; //draw
    }
    if ((player1 === "Rock" && player2 === "Scissors") || (player1 === "Paper" && player2 === "Rock") || (player1 === "Scissors" && player2 === "Paper")) {
        roundResult = 1; //win for player 1
    }
    if ((player1 === "Rock" && player2 === "Paper") || (player1 === "Paper" && player2 === "Scissors") || (player1 === "Scissors" && player2 === "Rock")) {
        roundResult = -1; //loss for player 1
    }
    return roundResult;
  }
  
  let result = getWinner(userInput, computerInput);
  console.log(result);



