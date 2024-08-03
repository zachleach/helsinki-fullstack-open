/* 1.1 display content, header, and total as separate components */ 
const Header = ({ course }) => {
	return (
		<div>
			<h1>
				{course}
			</h1>
		</div>
	)
}

/* 1.1 display content, header, and total as separate components */ 
const Content = ({ parts }) => {
	return (
		<div>
			<Part {...parts[0]}/>
			<Part {...parts[1]}/>
			<Part {...parts[2]}/>
		</div>
	)
}

/* 1.2 refactor the Content component to use Part components */ 
const Part = ({ name, exercises }) => {
	return (
		<div>
			<p>
				{name} {exercises}
			</p>
		</div>
	)
}

/* 1.1 display content, header, and total as separate components */ 
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


const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name}/>
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
		</div>
	)
}




/* 1.1 create a react app to display course information */
const App = () => {
	/* 1.5 refactor course data into a single object; fix everything that breaks. */
	const course = {
		id: 1,
		name: 'Half Stack application development',
		/* 1.4 group parts into an array; fix everything that breaks. */
		/* 1.3 group part data into objects; fix everything that breaks. */
		parts: [
			{ 
				id: 1,
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				id: 2,
				name: 'Using props to pass data',
				exercises: 7
			},
			{ 
				id: 3,
				name: 'State of a component',
				exercises: 14
			}
		]
	}

  return (
    <div>
			{/* 2.1 define a component responsible for formatting a single course object */}
			<Course course={course}/>
    </div>
  )
}

export default App

