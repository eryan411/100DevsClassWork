//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let faveTV = ["Winning Time", "Game Of Thrones", "Pokemon"]

faveTV.forEach( show => console.log( show ))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1, 8, 18, 19, 22]

let Evens = arr => arr.filter( n => n % 2 === 0 )

console.log(Evens(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfSecondLowestAndHighest(arr){
    let sorted = arr.sort((a, b) => a-b)
    alert(sorted[1] + sorted[sorted.length - 2])
}

test = [1, 25, 10, 190, 100]
sumOfSecondLowestAndHighest(test)