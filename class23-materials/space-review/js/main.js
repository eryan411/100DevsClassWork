//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 5, 9, 6]

alert(nums.reduce((a,b)=>a+b, 0))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = nums => nums.map(element => element *= element);
console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console
let reverseString = str => str.split('').reverse().join('')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let isPalindrome = str => reverseString(str.toLowerCase()) === str.toLowerCase()