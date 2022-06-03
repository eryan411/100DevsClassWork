// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let faveDrink = " Sour Monkey "
console.log(faveDrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let manyWords = "I ate a big old apple the other day, it was great "

const word = "apple"

if(manyWords.includes(word)){
    console.log("There is an apple")
} else {
    console.log("Thre is no apple")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return "rock"
    } else if (randomNum === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function letsPlayAGame(choice){
    choice = choice.toLowerCase()
    let opponent = rockPaperScissors()
    if((opponent === "rock" && choice === "paper") || (opponent === "paper" && choice === "scissors") || (opponent === "scissors" && choice === "rock")){
        console.log("You win!")
    } else if((opponent === choice)){
        console.log("You tie!")
    } else if((opponent === "rock" && choice === "scissors") || (opponent === "paper" && choice === "rock") || (opponent === "scissors" && choice === "paper")){
        console.log("You lose!")
    } else {
        console.log("Did not enter Rock, Paper, or Scissors")
    }

}
letsPlayAGame("RoCk")


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function repeatGame(arr){
    arr.forEach( choice => letsPlayAGame(choice) )
}

repeatGame( ["Rock", "PaPer", "sCiSsOrS"] )