import { useState, useEffect } from 'react'
import personService from './services/personService'
import './index.css'

/**
 * Input element that modifies @state using @set_state on input change event.
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

const Notification = ({ msg }) => {
	return (
		<div className='notification'>
			{msg}
		</div>
	)
}



const App = () => {
	/* 2.16: show a notification that lasts a few seconds after a successful operation is executed */
	const [notification, set_notification] = useState(null)
	const display_notification = (msg, time_ms=2500) => {
		set_notification(msg)
		setTimeout(() => {
			set_notification(null)
		}, time_ms)
	}

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
		const found = phonebook.find(obj => obj.name === name_input_field)
		if (found && found.number === number_input_field) {
			window.alert(`${name_input_field} already in phonebook!`)
			return
		}

		const new_person = {
			name: name_input_field,
			number: number_input_field
		}

		/* 2.15*: if a number is added to a pre-existing user, update the number */
		if (found && found.number !== number_input_field) {
			/* 2.15*: ask the user to confirm the put operation */
			window.alert(`${name_input_field} is already in the phonebook, replace the old number with a new one?`)
			// http put request + modify existing_object.number in array
			personService.update(found.id, new_person).then(res => {
				found.number = number_input_field
				set_name_input_field('')
				set_number_input_field('')
				/* 2.16: show a notification that lasts a few seconds after a successful operation is executed */
				display_notification(`Updated ${new_person.name}'s number to ${number_input_field}!`)
			})
		}
		/* 2.12: make (new) numbers added to phonebook save to json-server */
		else {
			// http post request + add new object to array
			personService.create(new_person).then(data => {
				set_phonebook(phonebook.concat(new_person))
				set_name_input_field('')
				set_number_input_field('')
				/* 2.16: show a notification that lasts a few seconds after a successful operation is executed */
				display_notification(`Added ${new_person.name} to phonebook!`)
			})
		}
	}

	const handle_delete_button_click = (person) => {
		/* 2.14: deletion should be confirmed with an alert message */
		if (window.confirm(`are you sure you want to delete ${person.name} from the phonebook?`)) {
			// http delete request + remove from phonebook array
			personService.remove(person.id).then(data => {
				const new_arr = phonebook.filter(item => item.id !== person.id)
				set_phonebook(new_arr)
				display_notification(`Removed ${person.name} from phonebook!`)
			})
		}
	}

	/* 2.9*: implement a search field that can be used to filter the list of people displayed by name */
	const [filter_input_field, set_filter_input_field] = useState('')
	const filtered_phonebook = phonebook.filter(obj => obj.name.toUpperCase().includes(filter_input_field.toUpperCase()))

  return (
    <div>
      <h2>
				Phonebook
			</h2>

			<Notification msg={notification}/>

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
						<button onClick={() => handle_delete_button_click(item)}>
							delete
						</button>

					</div>
				))}
			</div>

    </div>
  )
}

export default App
