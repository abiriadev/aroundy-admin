import { koKR } from '@mui/x-date-pickers/locales'
import { experimental_extendTheme as materialExtendTheme } from '@mui/material/styles'
import { extendTheme as extendJoyTheme } from '@mui/joy/styles'

const primary = '#12B890'

export const joyTheme = extendJoyTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					'50': '#ecfdf7',
					'100': '#d1fae9',
					'200': '#a8f2d7',
					'300': '#6fe6c2',
					'400': '#36d1a7',
					'500': '#12b890',
					'600': '#079475',
					'700': '#057760',
					'800': '#075e4e',
					'900': '#074d41',
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
						main: primary,
					},
				},
			},
		},
	},
	koKR,
)
