import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react';
import './index.css'
import App from './App.tsx'

const DOMAIN: string = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENTID: string = import.meta.env.VITE_AUTH0_CLIENTID;
const AUDIENCE: string = import.meta.env.VITE_AUTH0_AUDIENCE;

createRoot(document.getElementById('root')!).render(
	<Auth0Provider
		domain={DOMAIN}
		clientId={CLIENTID}
		authorizationParams={{
			redirect_uri: window.location.origin,
			audience: AUDIENCE
		}}
	>
		<StrictMode>
			<App/>
		</StrictMode>
	</Auth0Provider>
)
