//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    color: "black",
    strap: "leather",
    currentTime: 60
}

stopwatch.tellTime = function(time){
    console.log(`The current time is ${time}`)
}

stopwatch.whatStrap = function(strap){
    console.log(`The current strap is ${strap}`)
}

stopwatch.addTime = function(time){
    return (stopwatch.currentTime += time)
}