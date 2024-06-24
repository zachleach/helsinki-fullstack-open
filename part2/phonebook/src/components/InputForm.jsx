import personService from '../services/personService'

const InputForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, errorMessage, setErrorMessage }) => {
	{/* handler that adds a user to the list and database */}
	const addName = (event) => {
		event.preventDefault()
		const found = persons.find(p => p.name === newName)
		{/* 2.15* if input pre-existing person with a different number, update that person in the database and on the screen */}
		if (found) {
			window.confirm(`${found.name} is already added to the phonebook, replace the old number with a new one?`)
			const p = {
				...found,
				number: newNumber,
			}
			{/* add person */ }
			personService
				.update(p)
				.then(returnedPerson => {
            setPersons(persons.map(person => person.id !== p.id ? person : returnedPerson));
						setNewName('')
						setNewNumber('')
						{/* 2.16 display error message */}
						setErrorMessage(`Updated ${person.name}`)
						setTimeout(() => {
							setErrorMessage(null)
						}, 2000)
				})
		}
		else {
			const p = {
				name: newName,
				number: newNumber,
				id: persons.length + 1 + ""
			}

			{/* 2.12 post request new person to json-server */}
			{/* 2.13 refactor project to use the service */}
			personService
				.create(p)
				.then(person => {
					setPersons(persons.concat(p))
					setNewName('')
					setNewNumber('')
					{/* 2.16 display error message */}
					setErrorMessage(`Added ${person.name}`)
					setTimeout(() => {
						setErrorMessage(null)
					}, 2000)
				})
		}
	}

	return (
		/* on form submission, call addName() */
		<form onSubmit={addName}>
			<div>
				{/* keep track of text within the input box */}
				name: <input 
					value={newName}
					onChange={(e) => setNewName(e.target.value)}
				/>
			</div>
			<div>
				{/* keep track of text within the input box */}
				number: <input 
					value={newNumber}
					onChange={(e) => setNewNumber(e.target.value)}
				/>
			</div>

			<div>
				<button type="submit">
					add
				</button>
			</div>
		</form>
	)
}

export default InputForm
