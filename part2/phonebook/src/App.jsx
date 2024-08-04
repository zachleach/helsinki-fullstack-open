import { useState } from 'react'

/* 2.6 implement functionality for adding items to the phonebook */
const Form = ({ phonebook, set_phonebook }) => {
  const [new_name, set_new_name] = useState('')

	const handle_submit = (event) => {
		event.preventDefault()
		const new_person = {
			name: new_name
		}

		set_phonebook(phonebook.concat(new_person))
		set_new_name('')
	}

	const handle_input_change = (event) => {
		console.log(event.target.value)
		set_new_name(event.target.value)
	}

	return (
		<form onSubmit={handle_submit}>
			<div>
				name: 
				<input value={new_name} onChange={handle_input_change}/>
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
