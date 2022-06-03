//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let pokemon = ['charizard', 'monkey', 'mewtwo']
function reverseTeam(x){
    console.log(x.reverse())
}
reverseTeam(pokemon)
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function compareSquaresToCubes(a,b){
    a = a.reduce((a,b)=>a+b**2,0)
    b = b.reduce((a,b)=>a+b**3,0)
    return a > b
}
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multipleOfIndexes(x){
    return x.filter((x, i)=>x%i===0)
}
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function parseNumsSum(x){
    return x.reduce((a,b)=>a + parseInt(b), 0)
}