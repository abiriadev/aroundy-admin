import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
	CssVarsProvider,
	StyledEngineProvider,
} from '@mui/joy'
import { theme } from './theme'
import { StrictMode } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') return

	const { worker } = await import('./mocks/browser')

	return worker.start({
		onUnhandledRequest: 'bypass',
	})
}

await enableMocking()

ReactDOM.createRoot(
	document.getElementById('root')!,
).render(
	<StrictMode>
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StyledEngineProvider injectFirst>
				<CssVarsProvider theme={theme}>
					<App />
				</CssVarsProvider>
			</StyledEngineProvider>
		</LocalizationProvider>
	</StrictMode>,
)
