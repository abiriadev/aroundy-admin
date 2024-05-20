import {
	Button,
	Card,
	CardContent,
	Chip,
	Stack,
	Typography,
	Input,
} from '@mui/joy'
import { Pagination } from './Pagination'
import {
	AddRounded,
	SearchRounded,
} from '@mui/icons-material'
import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

export interface InfoTableProps extends PropsWithChildren {
	total?: number
	start?: number
	end?: number
	current?: number
	buttonLink?: string
}

export const InfoTable = ({
	total = 0,
	start,
	end,
	current,
	buttonLink,
	children,
}: InfoTableProps) => {
	return (
		<Stack gap={2}>
			<Card>
				<Stack
					direction="row"
					gap={2}
					alignItems="center"
				>
					<Stack
						direction="row"
						alignItems="center"
						gap={1}
					>
						<Typography level="h3">
							Info
						</Typography>
						<Chip size="sm" color="primary">
							total {total}
						</Chip>
					</Stack>
					<Input
						startDecorator={<SearchRounded />}
						className="ml-auto"
					></Input>
					{buttonLink && (
						<Button
							startDecorator={<AddRounded />}
							component={Link}
							to={buttonLink}
						>
							추가
						</Button>
					)}
				</Stack>
				<CardContent>{children}</CardContent>
			</Card>
			<Pagination
				start={start}
				end={end}
				current={current}
			/>
		</Stack>
	)
}
