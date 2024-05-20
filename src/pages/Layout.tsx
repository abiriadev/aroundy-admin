import { Box, Grid, Stack } from '@mui/joy'
import { AppBar } from '../components/AppBar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<Stack>
			<AppBar />
			<Box className="p-8 mt-10"></Box>
			<Grid container spacing={3}>
				<Grid xs></Grid>
				<Grid xs={10}>
					<Outlet />
				</Grid>
				<Grid xs></Grid>
			</Grid>
			<Box className="p-8 mt-10"></Box>
		</Stack>
	)
}
