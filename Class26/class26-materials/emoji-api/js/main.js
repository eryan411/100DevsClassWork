//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://emojihub.herokuapp.com/api/all/group_${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[0].name
        document.querySelector('h3').innerText = data[0].category
        document.querySelector('h4').innerText = data[0].group
        document.querySelector('h5').innerText = data[0].htmlCode
        document.querySelector('h6').innerText = data[0].unicode
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}