const Header = ({ course }) => {
	return (
		<div>
			<h1>
				{course}
			</h1>
		</div>
	)
}

const Content = ({ parts }) => {
	return (
		<div>
			<Part {...parts[0]}/>
			<Part {...parts[1]}/>
			<Part {...parts[2]}/>
		</div>
	)
}

const Part = ({ name, exercises }) => {
	return (
		<div>
			<p>
				{name} {exercises}
			</p>
		</div>
	)
}

const Total = ({ parts }) => {
	const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
	return (
		<div>
			<p>
				Number of exercises = {total} 
			</p>
		</div>
	)
}

const App = () => {
  const course = 'Half Stack application development'
	const parts = [
		{ 
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{ 
			name: 'State of a component',
			exercises: 14
		}
	]

  return (
    <div>
			<Header course={course}/>
			<Content parts={parts}/>
			<Total parts={parts}/>
    </div>
  )
}

export default App
