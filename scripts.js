let doc = document.getElementById('lorem')
let redDiv = document.getElementById('red')
let blueDiv = document.getElementById('blue')
let blackDiv = document.getElementById('black')
let resultDisplayDiv = document.getElementById('resultDisplay')

let classCheck = document.querySelectorAll('.x')





doc.innerText = "dhiufufdi"
doc.style.color = 'red'
let cc = doc.innerText
console.log(blueDiv)

let indicator = null
redDiv.onclick = () => {
	lorem()
	// console.log("red clicked")
	indicator = 'red'
}
blueDiv.onclick = () => {
	lorem()
	// console.log("Blue clicked")
	indicator = 'blue'

}
blackDiv.onclick = () => {
	lorem()
	// console.log("Black clicked")
	indicator = 'black'
}

function lorem() {
	let arr = ["rock", 'paper', 'scissors']
	let numb = Math.floor(Math.random() * arr.length)
	let computerGenerated = arr[numb]

	// red = rock
	// blue = paper
	// black = scissors
	console.log(indicator, computerGenerated)

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
