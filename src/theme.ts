import { koKR } from '@mui/x-date-pickers/locales'
import { experimental_extendTheme as materialExtendTheme } from '@mui/material/styles'
import { extendTheme as extendJoyTheme } from '@mui/joy/styles'

const black = '#000000'

export const joyTheme = extendJoyTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					'50': '#fafafa',
					'100': '#f5f5f5',
					'200': '#e5e5e5',
					'300': '#d4d4d',
					'400': '#a3a3a3',
					'500': black,
					'600': '#525252',
					'700': '#404040',
					'800': '#262626',
					'900': '#0a0a0a',
				},
			},
		},
	},
})

export const muiTheme = materialExtendTheme(
	{
		colorSchemes: {
			light: {
				palette: {
					primary: {
						main: black,
					},
				},
			},
		},
	},
	koKR,
)
