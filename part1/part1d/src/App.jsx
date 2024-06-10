import { useState } from 'react'


const Button = ({ handleClick, text }) => {
	return (
		<button onClick={handleClick}>
			{text}
		</button>
	)
}

const History = ({ history_arr }) => {
	if (history_arr.length === 0) {
		return (
			<div>
				Click buttons
			</div>
		)
	}
	
	return (
		<div>
			{history_arr.join(' ')}
		</div>
	)
}



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
			<Button handleClick={handle_left_click} text='Left'/>
			<Button handleClick={handle_right_click} text='Right'/>
			{right}
			<History history_arr={allClicks}/>
			<p>
				Total: {total}
			</p>
		</div>
	)
}

export default App
