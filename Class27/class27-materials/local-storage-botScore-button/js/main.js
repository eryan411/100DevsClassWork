//Create a button that adds 1 to a botScore stored in localStorage 
document.querySelector('button').addEventListener('click', addAnothaOne)
if(!localStorage.getItem('count')){
    localStorage.setItem('count', 0)
}

document.querySelector('h2').innerText = localStorage.getItem('count')

function addAnothaOne(){
    let score = localStorage.getItem('count')
    score++
    document.querySelector('h2').innerText = score
    localStorage.setItem('count', score)
}

