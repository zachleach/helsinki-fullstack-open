const Persons = ({ peopleArray, setPersons, filterInput }) => {
	const filtered_people = peopleArray.filter(p => 
		p.name.toLowerCase().includes(filterInput.toLowerCase())
	)

	/* 2.14 add a method for deleting users from the list */
	const deleteHandler = (person) => {
		const id = person.id
		{/* delete person's record from database (with confirmation from the user) */}
		if (window.confirm(`Delete ${person.name} ?`)) {
			personService
				.deletePerson(id)
				.then(response => {
					console.log(response)
					{/* update the people state array being rendered on the screen */}
					setPersons(peopleArray.filter(person => person.id !== id))
				})
		}
	}

	return (
		<div>
			{filtered_people.map((person) => 
				<div key={person.name}>
					{person.name} 
					{person.number}
					<button onClick={() => deleteHandler(person)}> 
						delete
					</button>
				</div>
				)}
		</div>
	)
}

export default Persons
