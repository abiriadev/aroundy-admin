import {
	Button,
	Card,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from '@mui/joy'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
	return (
		<Card>
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
					<Button>
						<Link to="/">로그인</Link>
					</Button>
				</Stack>
			</form>
		</Card>
	)
}
