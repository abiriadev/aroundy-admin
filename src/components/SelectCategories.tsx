import { Select, Option } from '@mui/joy'
import { KeyboardArrowDown } from '@mui/icons-material'

const categories = [
	{
		label: '팝업스토어',
		value: 'popupstore',
	},
	{
		label: '뷰티',
		value: 'beauty',
	},
	{
		label: '식품',
		value: 'food',
	},
	{
		label: '축제',
		value: 'festivals',
	},
]

export const SelectCategories = () => {
	return (
		<Select
			placeholder="카테고리"
			indicator={<KeyboardArrowDown />}
		>
			{categories.map(({ label, value }, i) => (
				<Option key={i} value={value}>
					{label}
				</Option>
			))}
		</Select>
	)
}
