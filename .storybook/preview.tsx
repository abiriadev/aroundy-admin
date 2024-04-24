import type { Preview } from '@storybook/react'
import '../src/index.css'
import { CssVarsProvider } from '@mui/joy'
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
			<CssVarsProvider theme={theme}>
				<Story />
			</CssVarsProvider>
		),
	],
}

export default preview
