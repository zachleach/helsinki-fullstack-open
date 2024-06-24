import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
	useEffect(hook, [])

	
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
  }

	const addNote = (event) => {
		event.preventDefault()
		const n = {
			content: newNote,
			important: Math.random() < 0.5,
			id: notes.length + 1
		}

		axios
			.post('http://localhost:3001/notes', n)
			.then(response => {
				console.log(response)
				setNotes(notes.concat(n))
				setNewNote('')
    })

	}

	const handleNoteSubmit = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}

	const notesToShow = showAll 
		? notes 
		: notes.filter(note => note.important === true)

	return (
		<div>
			<h1>
				Notes
			</h1>

			<div>
				<button onClick={() => setShowAll(!showAll)}>
					show { showAll ? 'important' : 'all' }
				</button>
			</div>

			<ul>
				{notesToShow.map((note) => 
					<Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
				)}
			</ul>

			<form onSubmit={addNote}>
				<input 
					value={newNote}
					onChange={handleNoteSubmit}
				/>
				<button type="submit">
					save
				</button>
			</form>

		</div>
	)
}

export default App

