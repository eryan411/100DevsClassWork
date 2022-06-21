//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const driverUrl = `http://ergast.com/api/f1/${choice}/driverStandings/1.json`
  const constructorUrl = `http://ergast.com/api/f1/${choice}/constructorStandings.json`
  console.log(driverUrl)
  console.log(constructorUrl)

  fetch(driverUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = `${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


  fetch(constructorUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = `${data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0].Constructor.name}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  
}
