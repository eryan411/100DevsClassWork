// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let faveHoliday = "Christmas"
faveHoliday.toUpperCase()
console.log(faveHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree = "asbsess"
alert(lastThree.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNum(one, two, three, four, five){
    alert(100 - five - four - three - two - one)
}
fiveNum(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 20))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNum(one, two, three){
    console.log(`Low: ${Math.min(one, two, three)}, high ${Math.max(one, two, three)}`)
}
threeNum(1, 15, 10)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
//function headsOrTails(){
//    let coinFlip = Math.floor(Math.random() * 2)
//    if (coinFlip == 1){
//        return "heads"
//    } else {
//        return "tails"
//    }
//}

const headsOrTails = _ => Math.random < .5 ? 'heads' : 'tails'

//headsOrTails()

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function bunchOfCoinFlips(num){
    for(let i = 0; i < num; i++){
        let flip = headsOrTails()
        console.log(flip)
    }
}
bunchOfCoinFlips()