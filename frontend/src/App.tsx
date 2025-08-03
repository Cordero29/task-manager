import './App.css';
import Login from "./components/Auth/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "./components/Auth/Profile.tsx";
import Home from "./components/Home.tsx";
import ProtectedRoute from "./helpers/auth/ProtectedRoute.tsx";

function App() {
	const router = createBrowserRouter([
		{
			path: '/login',
			element: <Login/>,
		},
		{
			element: <ProtectedRoute />,
			children: [
				{
					path: "/",
					element: <Home/>
				},
				{
					path: '/profile',
					element: <Profile/>,
				},
			]
		},
	])


	return (
		<div className="App">
			<RouterProvider router={router}/>
		</div>
	);
}

export default App
