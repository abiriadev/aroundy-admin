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

export interface InfoTableProps extends PropsWithChildren {
	total?: number
	start?: number
	end?: number
	current?: number
}

export const InfoTable = ({
	total = 0,
	start,
	end,
	current,
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
					<Button startDecorator={<AddRounded />}>
						추가
					</Button>
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
