import {useAuth0} from "@auth0/auth0-react";
import Logout from "./Logout.tsx";
import deleteUser from "../../api/user/deleteUser.ts";
import {useNavigate} from "react-router-dom";
import {useState} from 'react';

const Profile = () => {
	const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
	let navigate = useNavigate();

	const [loading, setLoading] = useState<boolean>(false);

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	const handleDeleteUser = async () => {
		setLoading(true);
		try {
			const authToken = await getAccessTokenSilently();

			const res = await deleteUser(authToken);

			if (res) {
				setLoading(false);
				navigate("/login");
			}
		} catch (e) {
			setLoading(false);
			console.error(e);
		}
	}

	return (
		(isAuthenticated && user) && (
			<div>
				<Logout/>
				<button disabled={loading} onClick={handleDeleteUser} style={{backgroundColor: 'red'}}>Delete Account</button>
				<h2 style={{textTransform: "capitalize"}}>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);

};

export default Profile;