//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow{
    constructor(season,genre,episodes,rating){
        this.season = season
        this.genre = genre
        this.episodes = episodes
        this.rating = rating
    }
    requestTotalMinutes(){
        alert(`This show is ${60 * this.season * this.episodes} minutes long`)
    }
    isItScary(){
        if (this.genre === 'horror'){
            alert('Spooky!')
        } else {
            alert('You\'ll survive')
        }
    }
    episodesPerSeason(){
        alert(`There are ${this.episodes / this.season} episodes per season`)
    }
}

let bridgerton = new NetflixShow(3, 'romance', 42, 9.8)