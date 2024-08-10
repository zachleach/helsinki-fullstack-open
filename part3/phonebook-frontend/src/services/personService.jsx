/* 2.13 extract code that handles backend into a separate module */
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
	return (
		axios
			.get(baseUrl)
			.then(res => res.data)
	)
}

const create = (new_obj) => {
	return (
		axios
			.post(baseUrl, new_obj)
			.then(res => res.data)
	)
}

const update = (id, new_obj) => {
	return (
		axios
			.put(`${baseUrl}/${id}`, new_obj)
			.then(res => res.data)
	) 
}

const remove = (id) => {
	return (
		axios
			.delete(`${baseUrl}/${id}`)
			.then(res => res.data)
	)
}

export default { getAll, create, remove, update }
