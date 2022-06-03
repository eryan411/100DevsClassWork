//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', ageCheck)
let p = document.querySelector('p')
function ageCheck(){
    let age = Number(document.querySelector('input').value)

    if (age < 16) {
    //If under 16, tell them they can not drive
        p.innerText('You can not drive')
    } else if (age < 18){
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
        p.innerText('You can\'t hate from outside the club, because you can\'t even get in')
    } else if (age < 21) {
    //If under 21, tell them they can not drink
        p.innerText('You can not drink')
    } else if (age < 25) {
    //If under 25, tell them they can not rent cars affordably
        p.innerText('You can not rent cars affordably')
    } else if (age < 30) {
    //If under 30, tell them they can not rent fancy cars affordably
        p.innerText('You can not rent fancy cars affordably')
    } else {
    //If under over 30, tell them there is nothing left to look forward too
        p.innerText('There is nothing left to look forward too')
    }
}
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

