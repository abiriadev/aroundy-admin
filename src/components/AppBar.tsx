import {
	Button,
	Grid,
	Link,
	Stack,
	Typography,
} from '@mui/joy'
import { PropsWithChildren } from 'react'
import { NavLink, Link as RrdLink } from 'react-router-dom'
import Logo from '../assets/primary.svg?react'

const menus = [
	{ name: '포스트 관리', path: '/' },
	{ name: '기업 관리', path: '/companies' },
	{ name: '회원', path: '/accounts' },
]

export interface AppBarProps {}

const NavButton = ({
	to,
	children,
}: PropsWithChildren<{ to: string }>) => (
	<NavLink to={to}>
		{({ isActive }) => (
			<Button
				variant={isActive ? 'soft' : 'plain'}
				size="sm"
				color={isActive ? 'primary' : 'neutral'}
			>
				{children}
			</Button>
		)}
	</NavLink>
)

export const AppBar = () => {
	return (
		<Grid container spacing={3} className="shadow">
			<Grid xs></Grid>
			<Grid xs={10} className="px-0 pb-0">
				<Stack
					direction="row"
					gap={2}
					className="p-4"
					alignItems="center"
				>
					<Stack
						direction="row"
						gap={2}
						alignItems="center"
						className="mr-4 no-underline"
						component={RrdLink}
						to="/"
					>
						<Logo width={32} height={32} />
						<Typography
							level="h1"
							className="text-2xl"
						>
							Admin
						</Typography>
					</Stack>
					{menus.map((menu, i) => (
						<NavButton key={i} to={menu.path}>
							{menu.name}
						</NavButton>
					))}
					<Link
						component={RrdLink}
						underline="none"
						className="ml-auto"
						color="neutral"
						to="/login"
					>
						로그아웃
					</Link>
				</Stack>
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
