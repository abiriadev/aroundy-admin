import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
	CssVarsProvider,
	StyledEngineProvider,
} from '@mui/joy'
import { theme } from './theme'

ReactDOM.createRoot(
	document.getElementById('root')!,
).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<CssVarsProvider theme={theme}>
				<App />
			</CssVarsProvider>
		</StyledEngineProvider>
	</React.StrictMode>,
)
