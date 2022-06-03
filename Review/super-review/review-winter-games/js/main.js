//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const arr = ['shoes', 'shirts', 'socks', 'sweaters']
const newArray = []
function pushArray(arr){
    for (let i = 1; i < arr.length; i++){
        newArray.push(arr[i])
    }
}