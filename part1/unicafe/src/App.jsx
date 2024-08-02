import { useState } from 'react'

/* 1.10 refactor application to use statistic line components */ 
const StatLine = ({ text, value }) => {
	return (
		/* 1.11 display statistics as an HTML table */
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	)
}

/* 1.8 refactor application so statistics are in their own component */
const Statistics = ({ good, neutral, bad }) => {
	/* 1.7 expand application to show additional statistics about feedback */
	const all = good + neutral + bad
	const avg = (1 * good) + (-1 * bad) / all
	const pos = 100 * (good / all)

	/* 1.9 conditionally render statistics */
	if (all === 0) {
		return (
			<div>
				no feedback given
			</div>
		)
	}
	else {
		return (
			<div>
				{/* 1.11 display statistics as an HTML table */}
				<table>
					<tbody>
						<StatLine text="good" value={good}/>
						<StatLine text="neutral" value={neutral}/>
						<StatLine text="bad" value={bad}/>
						<StatLine text="all" value={all}/>
						<StatLine text="average" value={avg + ""}/>
						<StatLine text="positive" value={pos + " %"}/>
					</tbody>
				</table>
			</div>
		)
	}
}

/* 1.10 refactor application to use button components */ 
const Button = ({ handle_click, body }) => {
	return (
		<button onClick={handle_click}>
			{body}
		</button>
	)
}

/* 1.6 implement a web app for collecting customer feedback */
const App = () => {
	const [good, set_good] = useState(0)
	const [neutral, set_neutral] = useState(0)
	const [bad, set_bad] = useState(0)

	return (
		<div>

			<h1>
				give feedback
			</h1>
			<Button handle_click={() => set_good(good + 1)} body="good"/>
			<Button handle_click={() => set_neutral(neutral + 1)} body="neutral" />
			<Button handle_click={() => set_bad(bad + 1)} body="bad"/>

			<h1>
				statistics
			</h1>
			<Statistics {...{ good, neutral, bad }}/>

		</div>
	)
}

export default App


