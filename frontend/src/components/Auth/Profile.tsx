import {useAuth0} from "@auth0/auth0-react";
import Logout from "./Logout.tsx";

const Profile = () => {
	const {user, isAuthenticated, isLoading} = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		(isAuthenticated && user) && (
			<div>
				<Logout/>
				<h2 style={{textTransform: "capitalize"}}>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);

};

export default Profile;