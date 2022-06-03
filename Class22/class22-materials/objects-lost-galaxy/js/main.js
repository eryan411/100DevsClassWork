//Create a mouse object that has four properties and three methods
let mouse = {
    color: "white",
    size: "giant rat",
    makesAllOfDaRules: true,
    howMuchTroubleHaveTheyGotThemselvesInto: 6,
}

mouse.getIntoTrouble = function(trouble){
    moreTrouble = this.howMuchTroubleHaveTheyGotThemselvesInto + trouble
    console.log(`We've gotten into ${moreTrouble} much trouble`)
}

mouse.isTheGiantRat = function(size, makesAllOfDaRules){
    if (makesAllOfDaRules === true){
        console.log(`I'm the ${size} that makes all of the rules`)
    } else {
        alert("This rat does not make the rules!")
    }
}

mouse.whatAreWe = function(){
    console.log(`Rats, rats, we're the rats`)
}