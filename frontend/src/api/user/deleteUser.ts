import API from '../axios.ts';


const deleteUser = async (authToken: string) => {
	const headers = {
		Authorization: `Bearer ${authToken}`
	}
	try {
		let res = await API.delete("/user/delete/", {headers})
		return res.data;
	} catch (e) {
		console.error("ERROR: ", e);
		return e;
	}
}

export default deleteUser;