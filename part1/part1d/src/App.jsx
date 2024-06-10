import { useState } from 'react'

const App = () => {
	const [clicks, setClick] = useState(0)
	const [allClicks, setAll] = useState([])

	const handle_click = () => {
		setClick(clicks + 1)
		setAll(allClicks.concat('C'))
	}

	return (
		<div>
			{clicks}
			<button onClick={handle_click}>
				Left
			</button>
			<p>
				{allClicks.join(' ')}
			</p>
		</div>
	)
}

export default App
