import { extendTheme } from '@mui/joy/styles'

export const theme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					solidBg: '#000',
					solidActiveBg: '#404040',
					solidHoverBg: '#262626',
				},
			},
		},
	},
})
