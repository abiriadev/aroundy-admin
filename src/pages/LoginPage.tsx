import {
	Button,
	Card,
	FormControl,
	FormLabel,
	Input,
	Stack,
} from '@mui/joy'

export const LoginPage = () => {
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
					<Button>로그인</Button>
				</Stack>
			</form>
		</Card>
	)
}
