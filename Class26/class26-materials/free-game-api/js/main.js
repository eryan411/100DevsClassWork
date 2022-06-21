//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.magicthegathering.io/v1/cards'
  const random = Math.floor(Math.random()*100)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = `${data.cards[random].name}`
        document.querySelector('h3').innerHTML = `${data.cards[random].manaCost}`
        document.querySelector('h4').innerHTML = `${data.cards[random].colors}`
        document.querySelector('h5').innerHTML = `${data.cards[random].type}`
        document.querySelector('h6').innerHTML = `${data.cards[random].text}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}