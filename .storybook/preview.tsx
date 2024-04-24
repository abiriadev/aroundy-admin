import type { Preview } from '@storybook/react'
import '../src/index.css'
import {
	CssVarsProvider,
	StyledEngineProvider,
} from '@mui/joy'
import { theme } from '../src/theme'

const preview: Preview = {
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
			<StyledEngineProvider injectFirst>
				<CssVarsProvider theme={theme}>
					<Story />
				</CssVarsProvider>
			</StyledEngineProvider>
		),
	],
}

export default preview
