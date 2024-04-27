import { Button, Link, Stack, Typography } from '@mui/joy'
import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/primary.svg?react'

const menus = [
	{ name: '컨텐츠관리', path: '/' },
	{ name: '회사관리', path: '/companies' },
	{ name: '회원', path: '/accounts' },
]

export interface AppBarProps {
	selectedMenu?: string
}

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

export const AppBar = ({ selectedMenu }: AppBarProps) => {
	return (
		<Stack direction="row" gap={2} className="p-4">
			<Logo width={32} height={32} />
			<Typography
				level="h1"
				className="text-2xl mr-4"
			>
				Admin
			</Typography>
			{menus.map((menu, i) => (
				<NavButton key={i} to={menu.path}>
					{menu.name}
				</NavButton>
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
