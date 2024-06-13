import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-123456", id: 1 },
    { name: 'ARTt HELL', number: "10293123", id: 2 },
    { name: 'artt madasd', number: "123-421-32", id: 3 },
    { name: 'mike', number: "11111", id: 4 },
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

	{/* input monitors */}
	const handleNameInputChange = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}
	const handleNumberInputChange = (event) => {
		console.log(event.target.value)
		setNewNumber(event.target.value)
	}



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
    <div>

      <h2>
				Phonebook
			</h2>

			{/* on form submission, call addName() */}
      <form onSubmit={addName}>
        <div>
					{/* keep track of text within the input box */}
          name: <input 
						value={newName}
						onChange={handleNameInputChange}
					/>
        </div>
        <div>
					{/* keep track of text within the input box */}
          number: <input 
						value={newNumber}
						onChange={handleNumberInputChange}
					/>
        </div>


        <div>
          <button type="submit">
						add
					</button>
        </div>
      </form>

      <h2>
				Numbers
			</h2>

			{/* display the persons[] state array, each value wrapped in a div */}
			{persons.map((person) => 
				<div key={person.name}>{person.name} {person.number}</div>
			)}

    </div>
  )
}

export default App
