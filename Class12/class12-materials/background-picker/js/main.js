document.getElementById('purplebg').onclick = partyPurple
document.getElementById('greenbg').onclick = partyGreen
document.getElementById('bluebg').onclick = partyBlue
document.getElementById('purplechair').onclick = purpleChair
document.getElementById('greenchair').onclick = greenChair
document.getElementById('bluechair').onclick = blueChair
document.getElementById('clear').onclick = clear



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function purpleChair(){
  document.querySelector('img').src = 'img/pinkgamingchair.png'
}

function greenChair(){
  document.querySelector('img').src = 'img/chair.png'
}

function blueChair(){
  document.querySelector('img').src = 'img/tealchair.png'
}

function clear(){
  document.querySelector('body').style.backgroundColor = 'white'
  document.querySelector('body').style.color = 'black'
  document.querySelector('img').src = 'img/chair.png'
}