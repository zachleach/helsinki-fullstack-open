import { useState } from 'react'

/* 2.6 implement functionality for adding items to the phonebook */
const Form = ({ phonebook, set_phonebook }) => {
  const [name_input_field, set_name_input_field] = useState('')

	{/* 2.8 expand application to allow users to add phone numbers */}
  const [number_input_field, set_number_input_field] = useState('')

	const handle_submit = (event) => {
		event.preventDefault()

		/* 2.7 alert and prevent users from inputting names already in the phonebook */
		if (phonebook.find(obj => obj.name === name_input_field)) {
			window.alert(`${name_input_field} already in phonebook!`)
			return
		}

		const new_person = {
			name: name_input_field,
			number: number_input_field
		}

		set_phonebook(phonebook.concat(new_person))
		set_name_input_field('')
		set_number_input_field('')
	}

	const handle_name_input_change = (event) => {
		console.log(event.target.value)
		set_name_input_field(event.target.value)
	}

	const handle_number_input_change = (event) => {
		console.log(event.target.value)
		set_number_input_field(event.target.value)
	}

	return (
		<form onSubmit={handle_submit}>
			<div>
				name: 
				<input value={name_input_field} onChange={handle_name_input_change}/>
			</div>
			{/* 2.8 expand application to allow users to add phone numbers */}
			<div>
				number: 
				<input value={number_input_field} onChange={handle_number_input_change}/>
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
  const [phonebook, set_phonebook] = useState([
    { 
			name: 'Arto Hellas',
			number: '1'
		}
  ]) 

  return (
    <div>
      <h2>
				Phonebook
			</h2>

			{/* 2.6 implement functionality for adding items to the phonebook */}
			<Form {...{ phonebook, set_phonebook }}/>

      <h2>
				Numbers
			</h2>
			{/* 2.6 display the items in the phonebook */}
			<div>
				{phonebook.map(item => (
					<div key={item.name}>
						{item.name} {item.number}
					</div>
				))}
			</div>

    </div>
  )
}

export default App
