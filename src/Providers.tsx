import {
	Component,
	ElementType,
	PropsWithChildren,
} from 'react'
import {
	Experimental_CssVarsProvider as MaterialCssVarsProvider,
	THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles'
import {
	CssVarsProvider as JoyCssVarsProvider,
	StyledEngineProvider,
} from '@mui/joy/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { joyTheme, muiTheme } from './theme'

export const Providers = ({
	children,
}: PropsWithChildren) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StyledEngineProvider injectFirst>
				<MaterialCssVarsProvider
					theme={{
						[MATERIAL_THEME_ID]: muiTheme,
					}}
				>
					<JoyCssVarsProvider theme={joyTheme}>
						<CssBaseline enableColorScheme />
						{children}
					</JoyCssVarsProvider>
				</MaterialCssVarsProvider>
			</StyledEngineProvider>
		</LocalizationProvider>
	)
}

export const providersDecorator = (Child: ElementType) => (
	<Providers>
		<Child />
	</Providers>
)
