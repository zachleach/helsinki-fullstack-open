const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())

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

/**
 * 3.4: add a route for deleting /api/persons/:id 
 *
 */
app.delete('/api/persons/:id', (request, response) => {
	const id = request.params.id
	people = people.filter(person => person.id !== id)

	response.json(people)
})


/**
 * 3.5: add a route for post requests to /api/persons 
 *
 */
app.post('/api/persons', (request, response) => {
	const new_id = String(Math.ceil(Math.random() * 100000000000))
	const body = request.body

	/* 3.6: the request is not allowed to succeed if name is missing */
	if (body.name === undefined) {
		return response.status(400).json({ error: "name is missing" })
	}

	/* 3.6: the request is not allowed to succeed if number is missing */
	if (body.number === undefined) {
		return response.status(400).json({ error: "number is missing" })
	}

	/* 3.6: the request is not allowed to succed if the name already exists */
	const exists = people.some(p => p.name === body.name)
	if (exists) {
		return response.status(400).json({ error: "name must be unique" })
	}

	const new_person = {
		id: new_id,
		name: body.name,
		number: body.number
	}

	people = people.concat(new_person)
	response.json(people)
})










const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

