import { useState } from 'react'


const Statistics = (props) => {
	if (props.all === 0) {
		return (
			<div>
				<p>
					no feedback given
				</p>
			</div>
		)
	}
	return (
		<div>
			<h1>
				statistics
			</h1>

		<StatisticsLine text="good" value={props.good}/>
		<StatisticsLine text="neutral" value={props.neutral}/>
		<StatisticsLine text="bad" value={props.bad}/>
		<StatisticsLine text="all" value={props.all}/>
		<StatisticsLine text="average" value={props.average}/>
		<StatisticsLine text="positive" value={props.positive + " %"}/>

		</div>
	)
}

const StatisticsLine = (props) => {
	return (
		<div>
			{props.text} {props.value}
			<br></br>
		</div>
	)
}

const App = () => {
	const [stats, setStats] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
		all: 0,
		average: 0.0,
		positive: 0.0
	})

	const onClickGood = () => {
		const upd_good = stats.good + 1
		const upd_all = stats.all + 1
		const upd_avg = (upd_good - stats.bad) / upd_all
		const upd_pos = (upd_good / upd_all) * 100

		setStats({
			...stats,
			good: upd_good,
			all: upd_all,
			average: upd_avg,
			positive: upd_pos
		})
	}

	const onClickNeutral = () => {
		const upd_neutral = stats.neutral + 1
		const upd_all = stats.all + 1
		const upd_avg = (stats.good - stats.bad) / upd_all
		const upd_pos = (stats.good / upd_all) * 100

		setStats({
			...stats,
			neutral: upd_neutral,
			all: upd_all,
			average: upd_avg,
			positive: upd_pos
		})
	}

	const onClickBad = () => {
		const upd_bad = stats.bad + 1
		const upd_all = stats.all + 1
		const upd_avg = (stats.good - upd_bad) / upd_all
		const upd_pos = (stats.good / upd_all) * 100

		setStats({
			...stats,
			bad: upd_bad,
			all: upd_all,
			average: upd_avg,
			positive: upd_pos
		})

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

		<Statistics {...stats}/>


		</div>
	)
}

export default App
