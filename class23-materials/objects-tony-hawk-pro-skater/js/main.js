//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods
function SkaterBoi (flip, jump, grab, multiplier, combo, total){
    this.flip = flip
    this.jump = jump
    this.grab = grab
    this.multiplier = multiplier
    this.combo = combo
    this.total = total

    this.successfulFlip = function(){
        return (flip = true) ? (combo += 500 && multiplier++) : this.multiplier = 0;
    }
    this.successfuljump = function(){
        return (jump = true) ? (combo += 500 && multiplier++) : multiplier = 0;
    }
    this.successfulgrab = function(){
        return (grab = true) ? (combo += 500 && multiplier++) : this.multiplier;
    }
    this.finishCombo = function(){
        return 
    }
}

let tonyHawk = new SkaterBoi(true, true, true, 0, 0, 0)