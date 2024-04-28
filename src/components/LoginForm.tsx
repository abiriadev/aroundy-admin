import {
	Button,
	Card,
	Checkbox,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Typography,
} from '@mui/joy'
import { CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
	return (
		<Card className="shadow-sm">
			<Typography
				level="h2"
				className="p-4 text-2xl font-semibold"
				textAlign="center"
			>
				관리자 로그인
			</Typography>
			<CardContent>
				<form>
					<Stack gap={2}>
						<FormControl>
							<FormLabel>이메일</FormLabel>
							<Input
								type="email"
								placeholder="admin@aroundy.com"
							/>
						</FormControl>
						<FormControl>
							<FormLabel>비밀번호</FormLabel>
							<Input
								type="password"
								placeholder="1234"
							/>
						</FormControl>
						<Checkbox
							size="sm"
							label="로그인 상태 유지"
						/>
						<Button className="mt-4">
							<Link
								to="/"
								className="no-underline text-inherit"
							>
								로그인
							</Link>
						</Button>
					</Stack>
				</form>
			</CardContent>
		</Card>
	)
}
