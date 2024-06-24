const Filter = ({ state, setFunction }) => {
	console.log(state)
	return (
		<div>
			filter shown with <input
				value={state}
				onChange={(e) => setFunction(e.target.value)}
			/>
		</div>
	)
}

export default Filter
