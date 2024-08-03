/* 2.5 declare Course as a separate module to be imported by the App component */
import Course from './Course.jsx'

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

