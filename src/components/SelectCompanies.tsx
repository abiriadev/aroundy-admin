import Autocomplete from '@mui/joy/Autocomplete'
import CircularProgress from '@mui/joy/CircularProgress'
import { useEffect, useState } from 'react'
import { Company, fetchCompanies } from '../apis'
import {
	AutocompleteOption,
	ListItemContent,
	ListItemDecorator,
} from '@mui/joy'

export const SelectCompanies = () => {
	const [open, setOpen] = useState(false)
	const [options, setOptions] = useState<Array<Company>>(
		[],
	)
	const [selected, setSelected] =
		useState<Company | null>(null)
	const loading = open && options.length === 0

	useEffect(() => {
		if (!loading) return
		;(async () => setOptions(await fetchCompanies()))()
	}, [loading])

	// reset options when the menu is closed
	useEffect(() => void !open && setOptions([]), [open])

	return (
		<Autocomplete
			disableClearable
			placeholder="회사"
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			onChange={(_, value, reason) =>
				reason === 'selectOption' &&
				setSelected(value)
			}
			getOptionLabel={({ name }) => name}
			options={options}
			loading={loading}
			startDecorator={
				selected && (
					<img
						loading="lazy"
						width="20"
						src={selected.logo}
					/>
				)
			}
			endDecorator={
				loading ? (
					<CircularProgress
						size="sm"
						sx={{
							bgcolor: 'background.surface',
						}}
					/>
				) : null
			}
			renderOption={(props, { logo, name }) => (
				<AutocompleteOption {...props}>
					<ListItemDecorator>
						<img
							loading="lazy"
							width="20"
							src={logo}
						/>
					</ListItemDecorator>
					<ListItemContent>
						{name}
					</ListItemContent>
				</AutocompleteOption>
			)}
		/>
	)
}
