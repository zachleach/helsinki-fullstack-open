/* 2.13 refactor the server logic into a service component */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

/* get all of the data from the baseUrl */
const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

/* make a post request */
const create = (newObj) => {
	const request = axios.post(baseUrl, newObj)
	return request.then(response => response.data)
}

/* make a put request */
const update = () => {
	const request = axios.put(`${baseUrl}/${id}`, newObj)
	return request.then(response => response.data)
}

/* 2.14 add a method for deleting persons from the list */
const deletePerson = (id) => {
	const url = `${baseUrl}/${id}`
	const request = axios.delete(url)
	console.log(url)
	return request.then(response => response.data)
}

export default { getAll, create, update, deletePerson }
