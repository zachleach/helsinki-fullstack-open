import { useState, useEffect } from 'react'
import axios from 'axios'

/* 2.10 extract three components from the application */
const InputState = ({ state, set_state }) => {
	const handle_input_change = (event) => {
		set_state(event.target.value)
	}
	return (
		<input value={state} onChange={handle_input_change} />
	)
}

const App = () => {
	/* 2.11 the initial state of the application is fetched from json-server */
  const [phonebook, set_phonebook] = useState([]) 
	useEffect(() => {
		axios
			.get('http://localhost:3001/persons')
			.then(res => {
				set_phonebook(res.data)
			})
	}, [])

	/* 2.8 expand application to allow users to add phone numbers */
  const [number_input_field, set_number_input_field] = useState('')

	/* 2.6 implement functionality for adding items to the phonebook */
  const [name_input_field, set_name_input_field] = useState('')
	const handle_form_submit = (event) => {
		event.preventDefault()

		/* 2.7 alert and prevent users from inputting names already in the phonebook */
		if (phonebook.find(obj => obj.name === name_input_field)) {
			window.alert(`${name_input_field} already in phonebook!`)
			return
		}

		const new_person = {
			name: name_input_field,
			/* 2.8 expand application to allow users to add phone numbers */
			number: number_input_field
		}

		set_phonebook(phonebook.concat(new_person))
		set_name_input_field('')
		/* 2.8 expand application to allow users to add phone numbers */
		set_number_input_field('')
	}

	/* 2.9* implement a search field that can be used to filter the list of people displayed by name */
	const [filter_input_field, set_filter_input_field] = useState('')
	const filtered_phonebook = phonebook.filter(obj => obj.name.toUpperCase().includes(filter_input_field.toUpperCase()))

  return (
    <div>
      <h2>
				Phonebook
			</h2>
			{/* 2.9* implement a search field that can be used to filter the list of people displayed by name */}
			<div>
				filter shown with 
				<InputState state={filter_input_field} set_state={set_filter_input_field} />
			</div>

			<h2>
				Add a new
			</h2>
			{/* 2.6 implement functionality for adding items to the phonebook */}
			<form onSubmit={handle_form_submit}>
				<div>
					name: 
					<InputState state={name_input_field} set_state={set_name_input_field} />
				</div>
				{/* 2.8 expand application to allow users to add phone numbers */}
				<div>
					number: 
					<InputState state={number_input_field} set_state={set_number_input_field} />
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
			{/* 2.6 display the items in the phonebook */}
			<div>
				{filtered_phonebook.map(item => (
					<div key={item.name}>
						{item.name} {item.number}
					</div>
				))}
			</div>

    </div>
  )
}

export default App
