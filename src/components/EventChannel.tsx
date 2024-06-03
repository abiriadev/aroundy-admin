import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'

const options = [
	{
		label: '온라인',
		value: 'online',
	},
	{
		label: '오프라인',
		value: 'offline',
	},
	{
		label: '온/오프라인',
		value: 'both',
	},
	{
		label: '지점',
		value: 'branches',
	},
	{
		label: '온라인/지점',
		value: 'online-branches',
	},
]

export const EventChannel = () => {
	return (
		<RadioGroup name="channel" defaultValue="both">
			<List
				sx={{
					'--ListItem-radius': '8px',
				}}
				orientation="horizontal"
				className="gap-2"
			>
				{options.map(({ label, value }) => (
					<ListItem
						variant="outlined"
						key={value}
						className="rounded-lg shadow-sm py-4"
					>
						<Radio
							overlay
							value={value}
							label={label}
							className="flex-1"
							slotProps={{
								action: ({ checked }) => ({
									sx: theme => ({
										...(checked && {
											inset: -1,
											border: '2px solid',
											borderColor:
												theme.vars
													.palette
													.primary[500],
										}),
									}),
								}),
							}}
						/>
					</ListItem>
				))}
			</List>
		</RadioGroup>
	)
}
