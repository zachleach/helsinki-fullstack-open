/* author: @zachleach */
import { useState } from 'react'

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]

	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
	const [maxIndex, setMaxIndex] = useState(0)

	const onNext = () => {
		const max = anecdotes.length
		setSelected(Math.floor(Math.random() * max))
	}

	const onVote = () => {
		votes[selected] = votes[selected] + 1
		const upd_votes = [...votes]
		setVotes(upd_votes)

		setMaxIndex(getMaxIndex(upd_votes))
	}

	const getMaxIndex = (arr) => {
		let max_i = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[max_i]) {
				max_i = i
			}
		}

		return max_i
	}



	return (

		<div>
			<div>
				<h1>
					Anecdote of the day
				</h1>
			</div>
			<div>
				{anecdotes[selected]}
			</div>
			<div>
				has {votes[selected]} votes
			</div>

			<div>
				<button onClick={onVote}>
					vote
				</button>
				<button onClick={onNext}>
					next anecdote
				</button>
			</div>

			<div>
				<h1>
					Anecdote with most votes
				</h1>
				<div>
					{anecdotes[maxIndex]}
				</div>
				<div>
					has {votes[maxIndex]} votes
				</div>
			</div>
		</div>

	)

}

export default App
