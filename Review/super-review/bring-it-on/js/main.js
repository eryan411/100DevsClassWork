// *Variables*
// Create a variable and console log the value
let variablePractice = 0
console.log(variablePractice)

// Create a variable, add 10 to it, and alert the value
let addTen = 0
addTen += 20
alert(addTen)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(one, two, three, four){
    alert(one - two -three - four)
}
subtractFour(44, 5, 7, 9)


// Create a function that divides one number by another and returns the remainder
function divideAndRemainder(one, two){
    return(one % two)
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(one, two){
    if((one + two) > 50){
        alert(addTwoAlertJumanji)
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeAlertZebra(one, two, three){
    if((one * two * three) % 3 === 0){
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes(num, word) {
    for(let i = 0; i < num; i++){
        console.log(word)
    }
}