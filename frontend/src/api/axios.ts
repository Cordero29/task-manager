import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL

const API = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	}
})

export default API;