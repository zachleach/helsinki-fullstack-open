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

/* 1.1 create a react app to display course information */
const App = () => {

	/* 2.4 extend the application to allow for an arbitrary number of courses */
	const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
	]

  return (
    <div>
			{/* 2.4 extend the application to allow for an arbitrary number of courses */}
			{courses.map(course => (<Course key={course.id} course={course} />))}
    </div>
  )
}

export default App

