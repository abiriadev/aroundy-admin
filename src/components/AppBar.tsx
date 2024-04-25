import { Button, Link, Stack } from '@mui/joy'
import { Link as RrdLink } from 'react-router-dom'

const menus = [
	{ name: '컨텐츠관리', path: '/' },
	{ name: '회사관리', path: '/companies' },
	{ name: '회원', path: '/accounts' },
]

export interface AppBarProps {
	selectedMenu?: string
}

export const AppBar = ({ selectedMenu }: AppBarProps) => {
	return (
		<Stack
			direction="row"
			gap={2}
			className="p-4"
			sx={{
				backgroundColor: 'primary.solidBg',
			}}
		>
			{menus.map((menu, i) => (
				<Button
					key={i}
					variant="solid"
					size="sm"
					component={RrdLink}
					to={menu.path}
					aria-pressed={
						selectedMenu === menu.name
					}
				>
					{menu.name}
				</Button>
			))}
			<Link
				component="button"
				underline="none"
				className="ml-auto"
				color="neutral"
			>
				로그아웃
			</Link>
		</Stack>
	)
}
