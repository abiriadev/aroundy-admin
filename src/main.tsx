import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Providers } from './Providers.tsx'
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'

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
			<RouterProvider router={router} />
		</Providers>
	</StrictMode>,
)
