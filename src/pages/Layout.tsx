import { Stack } from '@mui/joy'
import { AppBar } from '../components/AppBar'
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<Stack>
			<AppBar />
			{children}
		</Stack>
	)
}
