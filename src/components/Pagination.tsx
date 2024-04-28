import {
	NavigateBeforeRounded,
	NavigateNextRounded,
} from '@mui/icons-material'
import { Button, Stack } from '@mui/joy'

export interface PaginationProps {
	start?: number
	end?: number
	current?: number
}

const range = (start: number, end: number) =>
	[...Array(end - start + 1).keys()].map(_ => _ + start)

export const Pagination = ({
	start = 1,
	end = 7,
	current = start,
}: PaginationProps) => {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
		>
			<Button
				variant="outlined"
				color="neutral"
				startDecorator={<NavigateBeforeRounded />}
			>
				이전
			</Button>
			<Stack direction="row">
				{range(start, end).map((page, i) => (
					<Button
						key={i}
						color={
							page === current
								? 'primary'
								: 'neutral'
						}
						variant={
							page === current
								? 'solid'
								: 'plain'
						}
					>
						{page}
					</Button>
				))}
			</Stack>
			<Button
				variant="outlined"
				color="neutral"
				endDecorator={<NavigateNextRounded />}
			>
				다음
			</Button>
		</Stack>
	)
}
