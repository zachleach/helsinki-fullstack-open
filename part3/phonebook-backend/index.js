const express = require('express')
const app = express()

let people = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
	response.json(people)
})


/* 3.2: add a get route for '/info' */
app.get('/info', (request, response) => {
	const date = Date().toString()
	const amt = people.length
	response.send(`
		<p>Phonebook has info for ${amt} people</p>
		<p>${date}</p>
	`)
})

/* 3.3: add a get route for /api/persons/:id */
app.get('/api/persons/:id', (request, response) => {
	const id = request.params.id
	const person = people.find(p => p.id === id)

	if (!person) {
		response.status(404).end()
		return
	}

	response.json(person)
})

/* 3.4: add a route for deleting /api/persons/:id */
app.delete('/api/persons/:id', (request, response) => {
	const id = request.params.id

	people = people.filter(person => person.id !== id)

	response.json(people)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

