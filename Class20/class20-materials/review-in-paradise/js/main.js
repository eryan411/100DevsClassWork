// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = []
favoriteFood = "hoagies"
alert(favoriteFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let stringDeclare = ["Meme"]
alert(stringDeclare[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNumbers(one, two, three){
    alert((one / two) * three)
}
threeNumbers()

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNum(one){
    console.log(cbrt(one))
}
oneNum()

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isItSummer(month){
    month = month.toLowerCase()
    if(month === "June" || month === "July" || month === "August"){
        alert("YAY")
    } else {
        alert("Booo")
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function logEachButFive(num){
    for(let i = 0; i < num; i++){
        if (i % 5 === 0){
            continue
        } else {
            console.log(i)
        }
    }
}