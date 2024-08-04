import { useState } from 'react'

/* 2.6 implement functionality for adding items to the phonebook */
const Form = ({ phonebook, set_phonebook }) => {
  const [input_field, set_input_field] = useState('')

	const handle_submit = (event) => {
		event.preventDefault()
		/* 2.7 alert and prevent users from inputting names already in the phonebook */
		if (phonebook.find(obj => obj.name === input_field)) {
			window.alert(`${input_field} already in phonebook!`)
			return
		}

		const new_person = {
			name: input_field
		}


		set_phonebook(phonebook.concat(new_person))
		set_input_field('')
	}

	const handle_input_change = (event) => {
		console.log(event.target.value)
		set_input_field(event.target.value)
	}

	return (
		<form onSubmit={handle_submit}>
			<div>
				name: 
				<input value={input_field} onChange={handle_input_change}/>
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
			name: 'Arto Hellas'
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
						{item.name}
					</div>
				))}
			</div>

    </div>
  )
}

export default App
