//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(punch, projectile, Super, ultra, isCurrent, isDan){
    this.punch = punch
    this.projectile = projectile
    this.super = Super
    this.ultra = ultra
    this.isCurrent = isCurrent
    this.isDan = isDan
    this.checkIfDan = function(){
        if(this.isDan){
            alert("git gud")
        } else {
            alert("You can win this tourney because you are not Dan")
        }
    }
    this.yellPunch = function(){
        alert(`${this.punch}!!`)
    }
    this.yellProjectile = function(){
        alert(`${this.projectile}!!`)
    }
    this.yellSuper = function(){
        alert(`${this.super}`)
    }
    this.isInCurrentGame = function(){
        if (this.isCurrent){
            console.log(`This character is SFV`)
        } else{
            console.log(`This charater is not in SFV`)
        }
    }
}

let ryu = new MakeFighter('Shoryuken', 'Hadoken', 'Shinku Hadoken', 'Metsu Hadoken', true, false)

let ken = new MakeFighter('Shoryuken', 'Hadoken', 'Shoryureppa', 'Shinryuken', true, false)

let dan = new MakeFighter('Koryuken', 'Gadoken', 'Hissho Buraiken', 'Shisso Buraiken', true, true)