// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let str = 'Is this the best week ever?'
alert(str.endsWith('?'))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let sentenceStr = "I like pies like any jr. dev would"
console.log(sentenceStr.replaceAll('jr. dev', 'software engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let opponent = Math.floor(Math.random() * 3)
    if (opponent == 0){
        return 'rock'
    } else if (opponent == 1){
        return 'paper'
    } else {
        return 'scissors'
    }
    
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playGame(play){
    play = play.toLowerCase()
    let opponent = rockPaperScissors()
    if ((play === 'rock' && opponent === 'scissors') || (play === 'paper' && opponent === 'rock') || (play === 'scissors' && opponent === 'paper')){
        console.log('You win!')
    } else if (play === opponent) {
        console.log('Tie!')
    } else {
        console.log('You Lose!')
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameMultiple(arr){
    arr.forEach(choice => playGame(choice))
}

playGameMultiple( ["Rock", "PaPer", "sCiSsOrS"] )