/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

/* 3.9: make the backend work with the frontend */
const cors = require('cors')
app.use(cors())

/* 3.7: add morgan middleware for logging using tiny configuration */
app.use(morgan('tiny'))

data = [
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

app.get('/', (req, res) => {
	res.send('Hello World!')
})

/* 3.1: return a hardcoded list of phonebook entries from address http://localhost:3001/api/persons */
app.get('/api/persons', (req, res) => {
	res.json(data)
})

/* 3.2: add route that displays number of people in the phonebook with the date and time */
app.get('/info', (req, res) => {
	const info = `
		<p>
			Phonebook has info for ${data.length} people
		</p>
		<p>
			${new Date()}
		</p>
	`
	res.send(info)
})

/* 3.3: implement functionality for displaying the information for a single phonebook entry */
app.get('/api/persons/:id', (req, res) => {
	const id = req.params.id
	const found = data.find(obj => obj.id == id)
	res.json(found)
})

/* 3.4: implement functionality for deleting a single phonebook entry by id */
app.delete('/api/persons/:id', (req, res) => {
	const id = req.params.id
	const found = data.find(obj => obj.id == id)

	if (found) {
		data = data.filter(obj => obj.id !== id)
		res.json(found)
	}
	else {
		res.status(404).end()
	}
})

/* 3.5: make it possible to add entries with HTTP POST */
app.post('/api/persons/', (req, res) => {
	const post_obj = req.body

	/* 3.6: don't allow requests with missing names or numbers */
	if (!('name' in post_obj)) {
		res.status(400).json({
			error: 'Missing name'
		})
		return
	}
	if (!('number' in post_obj)) {
		res.status(400).json({
			error: 'Missing number'
		})
		return
	}
	/* 3.7: don't allow requests with names already in phonebook */
	if (data.find(obj => obj.name === post_obj.name)) {
		res.status(400).json({
			error: 'Name must be unique'
		})
		return
	}

	post_obj.id = Math.floor(Math.random() * 100000)
	data = data.concat(post_obj)
	res.json(post_obj)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`)
})
