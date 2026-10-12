let doc = document.getElementById('lorem')
let redDiv = document.getElementById('red')
let blueDiv = document.getElementById('blue')
let blackDiv = document.getElementById('black')
let resultDisplayDiv = document.getElementById('resultDisplay')

let classCheck = document.querySelectorAll('.x')

let indicator = null

classCheck.forEach(item => {

    item.onclick = () => {
        indicator = item.value
        lorem()
    }
})


function lorem() {
    let arr = ["rock", 'paper', 'scissors']
    let numb = Math.floor(Math.random() * arr.length)
    let computerGenerated = arr[numb]

    // red = rock
    // blue = paper
    // black = scissors
    console.log(indicator, "<- human && computer ->" ,computerGenerated)

    if (indicator === 'red' && computerGenerated === 'scissors') {
        console.log(indicator, 'rock won')
    }
    else if (indicator === 'blue' && computerGenerated === 'rock') {
        console.log('paper won')
    }
    else if (indicator === 'black' && computerGenerated === 'paper') {
        console.log('scissors won')
    }
    else if (indicator === 'black' && computerGenerated === 'scissors') {
        console.log('match tied')
    }
    else if (indicator === 'red' && computerGenerated === 'rock') {
        console.log('match tied')
    }
    else if (indicator === 'blue' && computerGenerated === 'paper') {
        console.log('match tied')
    }
    else {
        console.log('Sorry You lost')
    }

    resultDisplayDiv.innerText = arr[numb]
}
