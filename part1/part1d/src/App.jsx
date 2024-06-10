import { useState } from 'react'

const App = () => {
	/* make state objects */
	const [ clicks, setClicks ] = useState({
		left: 0, right: 0
	})

	const handle_left_click = () => {
		const amount = {
			left: clicks.left + 1,
			right: clicks.right
		}
		setClicks(amount)
	}

	const handle_right_click = () => {
		const amount = {
			left: clicks.left,
			right: clicks.right + 1
		}
		setClicks(amount)
	}
	
	return (
		<div>
			{clicks.left}
			<button onClick={handle_left_click}>
				Left
			</button>
			<button onClick={handle_right_click}>
				Right
			</button>
			{clicks.right}
		</div>
	)
}

export default App
