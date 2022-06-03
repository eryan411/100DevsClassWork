//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(coffee, size, blend, cup){
        this.coffee = coffee
        this.size = size
        this.blend = blend
        this.cup = cup
    }
    getSize(){
        alert(`Your ${coffee} is ${size} big`)
    }
    whatColor(){
        alert(`Your cup is ${cup}`)
    }
    whatBlend(){
        alert(`Your cup is ${blend} smooth`)
    }
}