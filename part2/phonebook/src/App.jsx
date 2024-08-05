import { useState, useEffect } from 'react'
import personService from './services/personService'

/**
 * Input element that modifies @state using @set_state on input change event.
 *
 * 2.10: extract three components from the application
 *
 */
const InputState = ({ state, set_state }) => {
	const handle_input_change = (event) => {
		set_state(event.target.value)
	}
	return (
		<input value={state} onChange={handle_input_change} />
	)
}

/**
 * Button that deletes an object with object.id === @id from @state_array with @set_state_array if user confirms window.confirm(@confirmation_msg).
 * Changes are reflected in json-server database.
 *
 */
const DeleteButton = ({ state_array, set_state_array, id, confirmation_msg }) => {
	const handle_click = () => {
		const found = state_array.find(item => item.id === id)
		/* 2.14: deletion should be confirmed with an alert message */
		if (found && window.confirm(confirmation_msg)) {
			personService.remove(found.id).then(data => {
				const new_arr = state_array.filter(item => item.id !== id)
				set_state_array(new_arr)
			})
		}
	}

	return (
		<button onClick={handle_click}>
			delete
		</button>
	)
}

const App = () => {
	/* 2.11: the initial state of the application is fetched from json-server */
  const [phonebook, set_phonebook] = useState([]) 
	useEffect(() => {
		personService.getAll().then(data => {
			set_phonebook(data)
		})
	}, [phonebook])

	/* 2.8: expand application to allow users to add phone numbers */
  const [number_input_field, set_number_input_field] = useState('')

	/* 2.6: implement functionality for adding items to the phonebook */
  const [name_input_field, set_name_input_field] = useState('')
	const handle_form_submit = (event) => {
		event.preventDefault()

		/* 2.7: alert and prevent users from inputting names already in the phonebook */
		if (phonebook.find(obj => obj.name === name_input_field)) {
			window.alert(`${name_input_field} already in phonebook!`)
			return
		}

		const new_person = {
			name: name_input_field,
			number: number_input_field
		}

		/* 2.12: make numbers added to phonebook save to json-server */
		personService.create(new_person).then(data => {
			set_phonebook(phonebook.concat(new_person))
			set_name_input_field('')
			set_number_input_field('')
		})
	}

	/* 2.9*: implement a search field that can be used to filter the list of people displayed by name */
	const [filter_input_field, set_filter_input_field] = useState('')
	const filtered_phonebook = phonebook.filter(obj => obj.name.toUpperCase().includes(filter_input_field.toUpperCase()))

  return (
    <div>
      <h2>
				Phonebook
			</h2>
			{/* 2.9*: implement a search field that can be used to filter the list of people displayed by name */}
			<div>
				filter shown with 
				<InputState state={filter_input_field} set_state={set_filter_input_field} />
			</div>

			<h2>
				Add a new
			</h2>
			{/* 2.6: implement functionality for adding items to the phonebook */}
			<form onSubmit={handle_form_submit}>
				<div>
					name: 
					<InputState state={name_input_field} set_state={set_name_input_field} />
				</div>
				{/* 2.8: expand application to allow users to add phone numbers */}
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
			{/* 2.6: display the items in the phonebook */}
			<div>
				{filtered_phonebook.map(item => (
					<div key={item.name}>
						{item.name} 
						{item.number} 
						{/* 2.14: each person in the phonebook list should have a delete button */}
						<DeleteButton 
							state_array={phonebook} 
							set_state_array={set_phonebook} 
							id={item.id} 
							confirmation_msg={`are you sure you want to delete ${item.name} from the phonebook?`}/>
					</div>
				))}
			</div>

    </div>
  )
}

export default App
