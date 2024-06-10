import { useState } from 'react'

const Display = ({ count }) => {
	return (
		<div>
			{count}
		</div>
	)
}

const Button = ({ onClick, text }) => {
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const App = (props) => {
	const [ counter, setCounter ] = useState(0)

	const increment = () => setCounter(counter + 1)
	const reset_to_zero = () => setCounter(0)

	return (
		<div>
			<Display count={counter}/>
			<Button onClick={increment} text="Increment"/>
			<Button onClick={reset_to_zero} text="Reset"/>
		</div>
	)
}


export default App
