import { getInputDirection } from "./input.js" //gets current input direction from input.js

export const SNAKE_SPEED = 10 //sets the speed of the snake, this variable can be changed. the unit is updates/second
const snakeBody = [{x: 10, y: 11}] //the starting position of the snake in the center of the board
let newSegments = 0 //not sure how this is used


export function update() { //update function
	addSegments() //runs the addsegments function
	const inputDirection = getInputDirection() //gets the current input direction and assigns it to inputDirection variable
	for (let i = snakeBody.length - 2; i >= 0; i--) { //for every item in the snake body subtract 2 for some reason
		snakeBody[i + 1] = { ...snakeBody[i] } //move item in the snake to the position of the item before it until the whole snake has shifted one place
	}
	snakeBody[0].x += inputDirection.x //head of the snake is moved a grid position based on the given input direction
	snakeBody[0].y += inputDirection.y

}

export function draw (gameBoard) { //draws the snake onto the board
	snakeBody.forEach(segment => { //for every segment in the snake... (i think)
		const snakeElement = document.createElement('div') //creates a html item with tag div for every piece of snake
		snakeElement.style.gridRowStart = segment.y //places the piece of snake on the grid based on its grid position
		snakeElement.style.gridColumnStart = segment.x // ^^^
		snakeElement.classList.add('snake') //adds class 'snake' to the pieces of snake for styling
		gameBoard.appendChild(snakeElement) //not sure but i think it attatches the snake pieces to the grid or something idk
	})
}

export function expandSnake(amount){ //not too sure but i think its used to calculate the new length of the snake if it needs to be expanded
	newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) { //function to check if something is on the snake, the head can be ignored by passing the ignoreHead parameter
	return snakeBody.some((segment, index) => { //no idea
		if (ignoreHead && index === 0) return false //still have no idea how this is working
		return equalPositions(segment, position) //still still have no idea
	})
}

export function getSnakeHead() { //just returns the x y of the snake head
	return snakeBody[0] 
}

export function snakeIntersection() { //not too sure, it detects collisions or something using the onSnake function
	return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) { //checks any 2 items positions against eachother and returns true if theyre in the same place, seems very pointless
	return (pos1.x === pos2.x && pos1.y === pos2.y)

}

function addSegments() { //adds to the snake based on the value in newSegments and then sets newSegments to 0
	for (let i = 0; i < newSegments; i++) {
		snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) //idk how this works (...) (push)
	}
	newSegments = 0
}