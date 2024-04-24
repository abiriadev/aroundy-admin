import { Button, Link, Stack } from '@mui/joy'

const menus = ['컨텐츠관리', '회사관리', '회원']

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
					aria-pressed={selectedMenu === menu}
				>
					{menu}
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
