//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrOfNum = [4, 3, 2, 1]

sum = arrOfNum.reduce((a , b) => a + b, 0)

alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function sumArr(arr){
    arr.forEach(sqrt => sqrt *= sqrt)
}


//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str){
    console.log(str.split("").reverse().join(""))
}


//Create a function that takes in a string
//Alert if the string is a palindrome or not
const strIsPalindrome = str => str.split('').reverse().join('').toLowerCase() === str.toLowerCase() ? alert('Yes') : alert('No')