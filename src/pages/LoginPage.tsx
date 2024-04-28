import { LoginForm } from '../components/LoginForm'
import Logo from '../assets/primary-circle.svg?react'
import { Typography } from '@mui/joy'

export const LoginPage = () => {
	return (
		<main className="min-h-screen flex flex-col gap-8 justify-center items-center">
			<div className="flex items-center gap-3">
				<Logo width={48} height={48} />
				<Typography level="h1">Aroundy</Typography>
			</div>
			<LoginForm />
		</main>
	)
}
