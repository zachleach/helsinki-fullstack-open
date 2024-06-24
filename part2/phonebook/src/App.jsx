import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import InputForm from './components/InputForm'
import Notification from './components/Notification'

const App = () => {
	const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [errorMessage, setErrorMessage] = useState(null)

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
			<Notification message={errorMessage}/>
			<Filter state={filter} setFunction={setFilter}/>

      <h2>
				Add a new
			</h2>
			<InputForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>

      <h2>
				Numbers
			</h2>
			<Persons peopleArray={persons} setPersons={setPersons} filterInput={filter} />

    </div>
  )
}

export default App
