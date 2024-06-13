const Course = ({ course }) => {

	const getTotal = (parts_arr) => {
		return parts_arr.reduce((total, part) => part.exercises + total, 0)
	}

	return (
		<div>
			<h1>
				{course.name}
			</h1>
			
			{course.parts.map(part => (
					<p key={part.id}>{part.name} {part.exercises}</p>
			))}

			<p>
				total of {getTotal(course.parts)} exercises
			</p>

		</div>
	)
}

export default Course
