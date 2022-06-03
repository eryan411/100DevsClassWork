// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Parent{
    constructor(name, age, job){
        this._name = name
        this._age = age
        this._job = job
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
    get job(){
        return this._job
    }
    introduce(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am a ${this.job}`)
    }
}

let Ger = new Parent('Ger', 60, 'Teacher')


class Grandparent extends Parent{
    constructor(name, age, job, retired){
        super(name, age, job)
        this._retired = retired
    }
    get retired(){
        return this._retired
    }
    introduce(){
        super.introduce()
        console.log(`${this.retired ? 'Or at least I was before I retired' : 'And I\'m still kicking butt'}`)
    }
}

let Vinny = new Grandparent('Vinny', 88, 'Manager', true)

let family = [Ger, Vinny]

for(people of family){
    people.introduce()
}


class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
let bob = new Contractor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}
