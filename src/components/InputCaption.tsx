import { Stack, Textarea, Typography } from '@mui/joy'
import { useState } from 'react'

const countLines = (text: string) => text.split('\n').length

export interface InputCaptionProps {
	lengthLimit?: number
	rowsLimit?: number
}

export const InputCaption = ({
	lengthLimit = 2200,
	rowsLimit = 30,
}: InputCaptionProps) => {
	const [text, setText] = useState('')

	return (
		<Textarea
			placeholder="여기에 설명을 입력해주세요!"
			maxRows={rowsLimit}
			error={
				text.length > lengthLimit ||
				countLines(text) > rowsLimit
			}
			onChange={({ target: { value } }) =>
				setText(value)
			}
			endDecorator={
				<Stack
					direction="row"
					className="ml-auto"
					gap={1}
				>
					<Typography level="body-xs">
						{text.length} / {lengthLimit} 글자
					</Typography>
					<Typography level="body-xs">
						{countLines(text)} / {rowsLimit} 줄
					</Typography>
				</Stack>
			}
		></Textarea>
	)
}
