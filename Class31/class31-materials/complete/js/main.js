class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speed(){
        console.log(`${this.name} runs pretty fast`)
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}
class Cow extends Animal{
    constructor(name, color){
        super(name)
        this._color = color
    }
    get color(){
        return this._color
    }
    speak(){
        super.speak()
        console.log(`${this.name} moos`)
    }
}
class Terrior extends Dog{
    constructor(name, breed, speed, stubbiness){
        super(name, breed, speed)
        this._stubbiness = stubbiness
    }
    get stubbiness(){
        return this._stubbiness
    }
    speed(){
        super.speed()
        console.log(`...for a terrior`)
    }
    speak(){
        super.speak()
        console.log(`${this.name} lets out a high pitched bark`)
    }
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')
let colin = new Cow('Colin', 'Brown')
let duffy = new Terrior('Duffy', 'Scottish Terrior', 'Extra')

let farm = [simba,machi,salem, colin, duffy]

for( a of farm ){
    a.speak()
}

let multiWords = ['The', 'Apple', 'is', 'red']

function checkForApple(array){
    array.forEach(
        theWord => theWord == 'Apple'?
        console.log('Apple found'):
        console.log('Not the Apple')
    );
}

checkForApple(multiWords)