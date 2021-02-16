import { onSnake, expandSnake } from './snake.js' //import functions
import {randomGridPosition} from './grid.js'
let food = getRandomFoodPosition() //creates a food position variable based of a random location generated in getRandomFoodPosition function
const EXPANSION_RATE = 1 //changeable rate of expansion when the snake eat food, example, 1 makes the snake grow 1 longer for each food eaten

export function update(){
	if (onSnake(food)) { //if the snake head is touching food...
		expandSnake(EXPANSION_RATE) //expand the snake based on the expansion rate
		food = getRandomFoodPosition() //pick a new position for the food with getRandomfoodPosition
	}	

}

export function draw(gameBoard) { //draw the food onto the board based on its position
	const foodElement = document.createElement('div') //creates an html element in a div tag?
	foodElement.style.gridRowStart = food.y //no idea
	foodElement.style.gridColumnStart = food.x //no idea again
	foodElement.classList.add('food') //adds the class 'food' to the food element?
	gameBoard.appendChild(foodElement) //appends the food element to tha game board?
}

function getRandomFoodPosition() { //pick random position for the food and avoid spawning it on the snakes current positions
	let newFoodPosition //initialise newfoodPosition variable
	while (newFoodPosition == null || onSnake(newFoodPosition)) { //while a new position hasnt been found yet or the picked food position is under the snake...
		newFoodPosition= randomGridPosition()//generate a position with a random number generator in randomGridPosition()
	}
	return newFoodPosition //return the new food location
}