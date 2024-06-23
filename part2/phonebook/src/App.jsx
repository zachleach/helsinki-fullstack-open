import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/personService'

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

const Persons = ({ peopleArray, setPersons, filterInput }) => {
	const filtered_people = peopleArray.filter(p => 
		p.name.toLowerCase().includes(filterInput.toLowerCase())
	)

	/* 2.14 add a method for deleting users from the list */
	const deleteHandler = (id) => {
		{/* delete person's record from database */}
		personService
			.deletePerson(id)
			.then(response => {
				console.log(response)
				{/* update the people state array being rendered on the screen */}
				setPersons(peopleArray.filter(person => person.id !== id))
			})
	}

	return (
		<div>
			{filtered_people.map((person) => 
				<div key={person.name}>
					{person.name} 
					{person.number}
					<button onClick={() => deleteHandler(person.id)}> 
						delete
					</button>
				</div>
				)}
		</div>
	)
}

const InputForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
	{/* form submit function */}
	const addName = (event) => {
		event.preventDefault()
		const found = persons.find(p => p.name === newName)
		if (found) {
			alert(`${found.name} is already added to the phonebook`)
		}
		else {
			const p = {
				name: newName,
				number: newNumber,
				id: persons.length + 1 + ""
			}
			setPersons(persons.concat(p))
			setNewName('')
			setNewNumber('')

			{/* 2.12 post request new person to json-server */}
			{/* 2.13 refactor project to use the service */}
			personService.create(p)
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



const App = () => {
	const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')

	/* read the database into persons[] on initial render */
	const hook = () => {
		const data = personService.getAll()
		console.log(data)

		{/* 2.13 use the personService to interface with axios */}
		personService
			.getAll()
			.then(response => {
				setPersons(response)
			})
	}
	useEffect(hook, [])

  return (
    <div>
      <h2>
				Phonebook
			</h2>
			<Filter state={filter} setFunction={setFilter}/>

      <h2>
				Add a new
			</h2>
			<InputForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>

      <h2>
				Numbers
			</h2>
			<Persons peopleArray={persons} setPersons={setPersons} filterInput={filter} />

    </div>
  )
}

export default App
