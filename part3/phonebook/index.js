const express = require('express')
const app = express()

app.use(express.json())

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

/* 3.1 return a hardcoded list of phonebook entries from address http://localhost:3001/api/persons */
app.get('/api/persons', (req, res) => {
	res.json(data)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
