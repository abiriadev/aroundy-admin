import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { Providers } from './Providers.tsx'

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
		<Providers>
			<App />
		</Providers>
	</StrictMode>,
)
