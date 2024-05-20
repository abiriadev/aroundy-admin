import {
	FormControl,
	FormLabel,
	Input,
	Box,
	Button,
	Stack,
} from '@mui/joy'

export const CompanyForm = () => {
	return (
		<form>
			<Stack gap={3}>
				<Box gap={2}>
					<FormControl>
						<FormLabel>기업명</FormLabel>
						<Input placeholder="ex) 주식회사 세종대왕" />
					</FormControl>
				</Box>
				<Stack direction="row" gap={2}>
					<Button
						variant="outlined"
						className="flex-1"
					>
						취소
					</Button>
					<Button className="flex-1">등록</Button>
				</Stack>
			</Stack>
		</form>
	)
}
