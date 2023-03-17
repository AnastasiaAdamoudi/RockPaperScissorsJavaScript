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

let userName = prompt("Enter your name");
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
console.log(checkUserInput());


