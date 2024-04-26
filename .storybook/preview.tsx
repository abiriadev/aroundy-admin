import type { Preview } from '@storybook/react'
import '../src/index.css'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { handlers } from '../src/mocks/handlers'
import { Providers } from '../src/Providers.tsx'
import { withRouter } from 'storybook-addon-remix-react-router'

initialize(
	{
		onUnhandledRequest: 'bypass',
	},
	handlers,
)

export default {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		Story => (
			<Providers>
				<Story />
			</Providers>
		),
		withRouter,
	],
	loaders: [mswLoader],
} satisfies Preview
