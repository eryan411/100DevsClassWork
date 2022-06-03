//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
let test = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
function pushEvens(num){
    let evens = []
    for(let i = 0; i < num.length; i++){
        if (test[i] % 2 === 0){
            evens.push(test[i])
        }
    }
    return evens
}

console.log(pushEvens(test))