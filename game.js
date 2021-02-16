import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, //function imports from snake.js file
getSnakeHead, snakeIntersection  } from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js' //imports from food.js file

import {outsideGrid} from './grid.js' //import from grid.js file

let lastRenderTime = 0 //initialise lastRenderTime variable
const gameBoard = document.getElementById('game-board') //get game board from html and assign it name gameBoard
let gameOver = false //initialise game over state variable gameOver

function main(currentTime) { 

		if (gameOver) { //checks if game over state is reached and gives the user a restart confirmation and refreshes if clicked 
			if (confirm('You lost. Press ok to restart')) { //creates a pop out notice 
				window.location = '/' //reloads the index.html and starts the game over
			}
			return 
		}

	window.requestAnimationFrame(main) //not really sure
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 //calculates a measure of distance between frame renders
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return // i dont know how this is working

	console.log("Render") //prints 'render' to the console for every frame render, not really necessary
	lastRenderTime = currentTime //not sure why this happens but it does


	update() //runs the update function
	draw() //runs the draw function
}

window.requestAnimationFrame(main) //still dont know what this is doing


function update() {
	updateSnake() //runs updateSnake function from in snake.js
	updateFood() //runs updateFood function from food.js
	checkDeath() //runs checkDeath function
}

function draw() {
	gameBoard.innerHTML = '' //resets the game board
	drawSnake(gameBoard) //draws the snake on the game board?
	drawFood(gameBoard) //draws the food on the gameBoard?

}

function checkDeath() {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() //sets gameOver to true if snake head is outside the grid or snake intersects a wall
}