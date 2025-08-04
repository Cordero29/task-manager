import {Link} from 'react-router-dom'

const Home = () => {

	return (
		<div>
			Home Page
			<Link to={'/profile'}>Profile</Link>
		</div>
	)
}

export default Home;