let inputDirection = { x: 0, y: 0 }
let lastInputdirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
	switch (e.key) {
		case 'ArrowUp':
			if (lastInputdirection.y !== 0) break
			inputDirection = { x: 0, y: -1}
			break
		case 'ArrowDown':
			if (lastInputdirection.y !== 0) break
			inputDirection = { x: 0, y: 1}
			break
		case 'ArrowLeft':
			if (lastInputdirection.x !== 0) break
			inputDirection = { x: -1, y: 0}
			break
		case 'ArrowRight':
			if (lastInputdirection.x !== 0) break
			inputDirection = { x: 1, y: 0}
			break
	}
})

export function getInputDirection() {
	lastInputdirection = inputDirection
	return inputDirection
}