import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<Auth0Provider
		domain="dev-fevufobuex3m7yph.us.auth0.com"
		clientId="3MLrGMmxFxkw6vj8k18Qn2pUMXsEJSEZ"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<StrictMode>
			<App/>
		</StrictMode>
	</Auth0Provider>
)
