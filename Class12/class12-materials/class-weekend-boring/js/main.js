document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if(day === 'tuesday' || day === 'thursday'){
    alert('CLASS DAY!')
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').src = 'img/class.png'
  } else if (day === 'wednesday'){
    alert('It is an overused meme, my dudes')
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').src = 'img/frog.png'
  } else if (day === 'friday'){
    alert('7am waking up in the morning gotta be fresh gotta go downstairs')
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').src = 'img/rebeccablack.png'
  } else if (day === 'saturday'){
    alert('Today is for the boys')
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').src = 'img/fordaboys.png'
  } else if (day === 'sunday'){
    alert('Today is for the Lord. Hallelujah')
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').src = 'img/prayerhands.png'
  } else {
    alert('BOOOOOOOOORRRRRRRRIIIIIIIIINNNNNNNNNNGGGGGGG')
    document.querySelector('img').style.visibility = 'visible'
    document.querySelector('img').src = 'img/boo.jpg'
  }
}