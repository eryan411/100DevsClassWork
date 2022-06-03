document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if(day === 'tuesday' || day === 'thursday'){
    alert('CLASS DAY!')
  } else if (day === 'wednesday'){
    alert('It is an overused meme, my dudes')
  } else if (day === 'friday'){
    alert('7am waking up in the morning gotta be fresh gotta go downstairs')
  } else if (day === 'saturday'){
    alert('Today is for the boys')
  } else if (day === 'sunday'){
    alert('Today is for the Lord. Hallelujah')
  } else {
    alert('BOOOOOOOOORRRRRRRRIIIIIIIIINNNNNNNNNNGGGGGGG')
  }

}
