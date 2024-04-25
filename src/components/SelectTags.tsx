import { Add } from '@mui/icons-material'
import {
	Autocomplete,
	AutocompleteOption,
	ListItemDecorator,
	createFilterOptions,
} from '@mui/joy'

interface Tag {
	label: string
	value: string
	created: boolean
}

const tags: Array<Tag> = [
	{ label: 'New', value: '1' },
	{ label: '이벤트', value: '2' },
	{ label: '할인', value: '3' },
].map(_ => ({
	..._,
	created: false,
}))

const filter = createFilterOptions<Tag>()

export const SelectTags = () => {
	return (
		<Autocomplete
			multiple
			clearOnBlur
			handleHomeEndKeys
			placeholder="태그 선택 또는 만들기"
			options={tags}
			defaultValue={[]}
			isOptionEqualToValue={(option, value) =>
				option.value === value.value
			}
			filterOptions={(options, input) => {
				const filtered = filter(options, input)

				const { inputValue } = input

				const isExisting = options.some(
					({ label }) => inputValue === label,
				)
				if (inputValue !== '' && !isExisting) {
					filtered.push({
						label: inputValue,
						value: inputValue,
						created: true,
					})
				}

				return filtered
			}}
			renderOption={(props, { label, created }) => (
				<AutocompleteOption {...props}>
					{created ? (
						<>
							<ListItemDecorator>
								<Add />
							</ListItemDecorator>
							"{label}" 추가하기
						</>
					) : (
						label
					)}
				</AutocompleteOption>
			)}
		/>
	)
}
