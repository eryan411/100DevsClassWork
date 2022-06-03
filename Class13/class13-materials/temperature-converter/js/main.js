//Write your pseduo code first! 
//0 -> 32


document.querySelector('#yell').addEventListener('click', convert)

function convert(){
    //need the value that is in c
    let celcius = document.querySelector('#celcius').value
    //convert from c to f
    let fahrenheit = ((celcius * 9/5) + 32)

    //show it
    document.querySelector('#showTemp').innerText = fahrenheit
}




