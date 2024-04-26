import type { Preview } from '@storybook/react'
import '../src/index.css'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { handlers } from '../src/mocks/handlers.ts'
import { providersDecorator } from '../src/Providers.tsx'
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
	decorators: [providersDecorator, withRouter],
	loaders: [mswLoader],
} satisfies Preview
