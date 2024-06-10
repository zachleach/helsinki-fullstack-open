import { useState } from 'react'

const App = () => {
	const [left, setLeft] = useState(0)
	const [right, setRight] = useState(0)
	const [allClicks, setAll] = useState([])
	const [total, setTotal] = useState(0)

	const handle_left_click = () => {
		let updated_left = left + 1
		setLeft(updated_left)
		setAll(allClicks.concat('L'))
		setTotal(updated_left + right)
	}

	const handle_right_click = () => {
		let updated_right = right + 1
		setRight(right + 1)
		setAll(allClicks.concat('R'))
		setTotal(left + updated_right)
	}

	return (
		<div>
			{left}
			<button onClick={handle_left_click}>
				Left
			</button>
			<button onClick={handle_right_click}>
				Right
			</button>
			{right}
			<p>
				{allClicks.join(' ')}
			</p>
			<p>
				Total: {total}
			</p>
		</div>
	)
}

export default App
