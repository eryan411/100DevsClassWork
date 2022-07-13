// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Parent{
    constructor(kid, age, gender, job){
        // Abstraction
        this._kid = kid;
        this._age = age;
        this._gender = gender;
        this._job = job;
    }
        // Polymorphism
        get kid(){
            return this._kid;
        } 
        get age(){
            return this._age;
        }
        get gender(){
            return this._gender;
        }
        get job(){
            return this._job;
        }

    areYaWinning(kid){
        return `Are ya winning, ${kid}`;
    }

    boomerCheck(age){
        if(age < 65){
            return 'Okay boomer'
        }
        else{
            return 'Eat your avocado toast, Millenial parent'
        }
    }
    
}

//inheritance
class Grandparent extends Parent{
    constructor(grandkids){
        this._grandkids = grandkids;
    }

    get grandkids(){
        return this._grandkids
    }

    irishCatholicCheck(grandkids){
        if (grandkids > 10){
            return 'That\'s a lot of grandkids huh'
        }
    }
}