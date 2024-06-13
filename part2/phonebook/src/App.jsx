import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

	{/* input monitor */}
	const handleNameSubmission = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
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
				name: newName
			}
			setPersons(persons.concat(p))
			setNewName('')
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
						onChange={handleNameSubmission}
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
		<ul>
			{persons.map((person) => 
				<div key={person.name}>{person.name}</div>
			)}
		</ul>

    </div>
  )
}

export default App
