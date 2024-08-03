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
			{/* 2.1 courses can have an arbitrary number of parts */}
			{parts.map(part => (<Part key={part.id} {...part} />))}
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
	/* 2.3 compute the sum using array#reduce()  */
	const total = parts.reduce((sum, part) => sum + part.exercises, 0)

	return (
		<div>
			<h4>
				Number of exercises = {total} 
			</h4>
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

export default Course
