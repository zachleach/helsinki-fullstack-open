import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
	return (
		<div>
			<p>Hello World!</p>
		</div>
	)
}

const App = () => {
	console.log('test')

	return (
		<div>
			<h1>Greetings</h1>
			<Hello />
			<Hello />
			<Hello />
		</div>
	)
}

export default App
