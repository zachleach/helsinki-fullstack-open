import { useState } from 'react'

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

const Persons = ({ peopleArray, filterInput }) => {
	const filtered_people = peopleArray.filter(p => p.name.toLowerCase().includes(filterInput.toLowerCase()))
	return (
		<div>
			{filtered_people.map((person) => 
				<div key={person.name}>{person.name} {person.number}</div>
			)}
		</div>
	)
}

const InputForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
	
	{/* form submit function */ }
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
				id: persons.length
			}
			setPersons(persons.concat(p))
			setNewName('')
			setNewNumber('')
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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-123456", id: 1 },
    { name: 'ARTt HELL', number: "10293123", id: 2 },
    { name: 'artt madasd', number: "123-421-32", id: 3 },
    { name: 'mike', number: "11111", id: 4 },
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')

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
			<Persons peopleArray={persons} filterInput={filter} />

    </div>
  )
}

export default App
