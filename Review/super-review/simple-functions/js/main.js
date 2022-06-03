//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwoNums(one, two){
    alert(one - two)
}

//create a function that divides three numbers and console logs the quotient
function divThreeNumbersThenQuotient(one, two, three){
    console.log(one/two/three)
}
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumbers(one, two, three){
    return(one * two * three)
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainderOfDividingTheSum(one, two, three){
    return((one + two) % three)
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function multiplyThenDoConditionalsOn100(one, two, three, four){
    product = one * two
    if(product > 100){
        console.log(product + three + four)
    } else if(product < 100){
        console.log(product - (three - four))
    } else {
        alert((product * three) / four)
    }
}