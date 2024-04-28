import { DeleteOutlineRounded } from '@mui/icons-material'
import { Button, IconButton, Table } from '@mui/joy'

export interface Account {
	name: string
	gender: string
	oAuthProvider: string
	email: string
	tel: string
	birth: string
	createdAt: Date
	latestLogin: Date
}

export const AccountsTable = () => {
	return (
		<Table>
			<thead>
				<tr>
					<th>이름</th>
					<th>성별</th>
					<th>로그인 유형</th>
					<th>이메일</th>
					<th>전화번호</th>
					<th>생년월일</th>
					<th>가입일</th>
					<th>최근 로그인 날짜</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{accounts.map(
					(
						{
							name,
							gender,
							oAuthProvider,
							email,
							tel,
							birth,
							createdAt,
							latestLogin,
						},
						i,
					) => (
						<tr key={i}>
							<td>{name}</td>
							<td>{gender}</td>
							<td>{oAuthProvider}</td>
							<td>{email}</td>
							<td>{tel}</td>
							<td>{birth}</td>
							<td>
								{createdAt.toLocaleDateString(
									'ko-KR',
									{
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									},
								)}
							</td>
							<td>
								{latestLogin.toLocaleDateString(
									'ko-KR',
									{
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									},
								)}
							</td>
							<td>
								<IconButton color="danger">
									<DeleteOutlineRounded />
								</IconButton>
							</td>
						</tr>
					),
				)}
			</tbody>
		</Table>
	)
}

const accounts = [
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
	{
		name: '홍길동',
		gender: '남성',
		oAuthProvider: 'Google',
		email: 'oro3673@gmail.com',
		tel: '010-1234-5678',
		birth: '1999-01-01',
		createdAt: new Date('2021-09-01'),
		latestLogin: new Date('2021-09-01'),
	},
]
