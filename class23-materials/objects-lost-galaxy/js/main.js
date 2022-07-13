//Create a dog object that has four properties and three methods
let dog = {}

dog.name = 'Alex'
dog.breed = 'Labradoodle'
dog.color = 'white'
dog.legs = 'four'

dog.isYappy = function(){
    return true
}

dog.bark = function(){
    console.log('WOOF')
}

dog.fetch = function(){
    console.log('ZOOOOOOOOOOM')
}

dog.barkAtDoor = function(){
    if (dog.isYappy == true){
        alert('THERE\'S SOMEBODY AT THE DOOR')
    } else {
        alert('Yawn')
    }
}