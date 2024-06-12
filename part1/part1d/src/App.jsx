import { useState } from 'react'





const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [all, setAll] = useState(0)
	const [average, setAverage] = useState(0.0)
	const [positive, setPositive] = useState(0.0)

	const onClickGood = () => {
		let updated_good = good + 1
		let updated_all = all + 1
		setGood(updated_good)
		setAll(updated_all)
		setAverage((updated_good - bad) / updated_all)
		setPositive(updated_good / updated_all)
	}
	const onClickNeutral = () => {
		let updated_all = all + 1
		setNeutral(neutral + 1)
		setAll(updated_all)
		setAverage((good - bad) / updated_all)
		setPositive(good / updated_all)
	}
	const onClickBad = () => {
		let updated_bad = bad + 1
		let updated_all = all + 1
		setBad(updated_bad)
		setAll(updated_all)
		setAverage((good - updated_bad) / updated_all)
		setPositive(good / updated_all)
	}

	return (
		<div>
			<h1>
				give feedback
			</h1>

			<button onClick={onClickGood}>
				good
			</button>
			<button onClick={onClickNeutral}>
				neutral
			</button>
			<button onClick={onClickBad}>
				bad
			</button>

			<h1>
				statistics
			</h1>

			<p>
				good {good}
				<br></br>

				neutral {neutral}
				<br></br>

				bad {bad}
				<br></br>

				all {all}
				<br></br>

				average {average}
				<br></br>

				positive {positive} %
			</p>


		</div>
	)
}

export default App
