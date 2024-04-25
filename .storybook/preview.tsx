import type { Preview } from '@storybook/react'
import '../src/index.css'
import {
	CssVarsProvider,
	StyledEngineProvider,
} from '@mui/joy'
import { theme } from '../src/theme'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { handlers } from '../src/mocks/handlers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

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
			<LocalizationProvider
				dateAdapter={AdapterDateFns}
			>
				<StyledEngineProvider injectFirst>
					{/* <CssVarsProvider theme={theme}> */}
					<Story />
					{/* </CssVarsProvider> */}
				</StyledEngineProvider>
			</LocalizationProvider>
		),
	],
	loaders: [mswLoader],
} satisfies Preview
