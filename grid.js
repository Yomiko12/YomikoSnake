const GRID_SIZE = 21 //size of the grid (idk whay the variable name is styled like this its just what the guy in the video did)
export function randomGridPosition() { //generates a random position on the grid
	return {
		x: Math.floor(Math.random() * GRID_SIZE ) + 1, //picks a number between 1 and 21 and assigns it to the .x
		y: Math.floor(Math.random() * GRID_SIZE ) + 1 //same but for .y
	}
}

export function outsideGrid(position) { //checks if any position is outside of the grid limits
	return(
		position.x < 1 || position.x > GRID_SIZE || //fairly self explanatory i think
		position.y < 1 || position.y > GRID_SIZE
	)
}