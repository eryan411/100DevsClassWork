document.querySelector('#yell').addEventListener('click', run)

const trouble = ['Clean Your Room', 'Don\'t Sneak Out!', 'Study Harder!', 'Eat Your Vegetables!', 'No More Dominoes', 'Turn off that \'Hip Hop Music\'!']

function run(){
  const firstName = document.querySelector('#firstName').value
  const firstMid = document.querySelector('#firstMiddle').value
  const lastMid = document.querySelector('#lastMiddle').value
  const lastName = document.querySelector('#lastName').value

  randNum = Math.floor(Math.random() * 6)
  
  

  document.querySelector('#placeToYell').innerText = `${firstName} ${firstMid} ${lastMid} ${lastName}`
  document.querySelector('#whatYouDidWrong').innerText = trouble[randNum]

  if(!firstName && !firstMid && !lastMid && !lastName){
    console.log('nothing was entered')
    document.querySelector('#placeToYell').innerText = `DON\'T ACT LIKE YOU CAN\'T HEAR ME`
    document.querySelector('#whatYouDidWrong').innerText = ''
  }
}