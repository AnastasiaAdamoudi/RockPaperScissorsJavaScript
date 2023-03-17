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
userName = checkUsernameLength(userName);
alert(`Hello ${userName}`);
let userInput = prompt(`Enter your choice of Rock, Paper or Scissors`);
let computerChoices = [ "Rock", "Paper", "Scissors" ];
let playAgain = true;
let gameNumber = 0;
let winNumber = 0;
let drawNumber = 0;
let lossNumber = 0;
let score = 0;
while (playAgain === true) {
    if (checkUserInput() === true) {
        alert("The game starts!");
    }
    alert(`You chose ${userInput}`);

    let computerInput = computerChoices[computerInputGenerator(computerChoices)];
    alert(`The computer randomly chose ${computerInput}`);

    let gameResult = getWinner(userInput, computerInput);
    if (gameResult === 1) {
        alert("You won this round!");
    };
    if (gameResult === -1) {
        alert("Sorry, you lost this round.");
    };
    if (gameResult === 0) {
        alert("It's a draw!");
    };
    score += gameResult;
    alert(`Your score is ${score}`);
    gameNumber++;
    confirmAnswer = confirm(`${userName}, would you like to play round ${gameNumber + 1}`);
    if (confirmAnswer === true) {
        playAgain = true;
        userInput = prompt(`Enter your choice of Rock, Paper or Scissors`);
    }
    else {
        playAgain = false;
        alert(`Thank you, ${userName}, for playing, see you another time!`)
    }
}


function checkUsernameLength(name) {
    while (name.length > 10) {
    name = prompt("Enter your name using 10 characters or less.");
}
    if (name.length <= 10) {
        return name;
}
}




  function checkUserInput() {
    let result = true;
    if (userInput === "Rock" || userInput === "Paper" || userInput === "Scissors") {
        result = true;
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

// Task 4 - computer input
function computerInputGenerator(myArray) {
    return Math.floor(Math.random() * myArray.length);
}

  //Task 2 functions for win or lose
function getWinner(player1, player2) {
    let roundResult = 0;
    if ((player1 === "Rock" && player2 === "Rock") || (player1 === "Paper" && player2 === "Paper") || (player1 === "Scissors" && player2 === "Scissors")) {
        roundResult = 0; 
        drawNumber++;//draw
    }
    if ((player1 === "Rock" && player2 === "Scissors") || (player1 === "Paper" && player2 === "Rock") || (player1 === "Scissors" && player2 === "Paper")) {
        roundResult = 1; 
        winNumber++;//win for player 1
    }
    if ((player1 === "Rock" && player2 === "Paper") || (player1 === "Paper" && player2 === "Scissors") || (player1 === "Scissors" && player2 === "Rock")) {
        roundResult = -1; 
        lossNumber++;//loss for player 1
    }
    return roundResult;
  }



