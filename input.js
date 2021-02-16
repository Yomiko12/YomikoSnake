let inputDirection = { x: 0, y: 0 } //initialises variable that stores x and y value input direction
let lastInputdirection = { x: 0, y: 0 } //stores the previous input for some reason

window.addEventListener('keydown', e => { //idk how this works or what the 'e' is for 
	switch (e.key) {
		case 'ArrowUp': //if up arrow pressed
			if (lastInputdirection.y !== 0) break //checks if last input was up or down and cancels change of input if thats the case
			inputDirection = { x: 0, y: -1} //changes input direction
			break
		case 'ArrowDown': //same thing
			if (lastInputdirection.y !== 0) break
			inputDirection = { x: 0, y: 1}
			break
		case 'ArrowLeft': //same thing again 
			if (lastInputdirection.x !== 0) break
			inputDirection = { x: -1, y: 0}
			break
		case 'ArrowRight': //same thing again again 
			if (lastInputdirection.x !== 0) break
			inputDirection = { x: 1, y: 0}
			break
	}
})

export function getInputDirection() { //returns the current input direction and records the previous for some reason
	lastInputdirection = inputDirection
	return inputDirection
}