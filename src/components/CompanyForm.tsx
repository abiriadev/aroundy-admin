import {
	FormControl,
	FormLabel,
	Input,
	Box,
	Button,
	Stack,
	RadioGroup,
	Radio,
} from '@mui/joy'
import { UploadImage } from './UploadImage'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface CompanyCreate {
	name: string
	status: 'active' | 'inactive'
}

export const CompanyForm = () => {
	const { register, handleSubmit } =
		useForm<CompanyCreate>()
	const navigate = useNavigate()

	return (
		<form onSubmit={handleSubmit(() => navigate('/'))}>
			<Stack gap={3}>
				<FormControl>
					<FormLabel>기업명</FormLabel>
					<Input
						placeholder="ex) 주식회사 세종대왕"
						{...register('name')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>기업 로고</FormLabel>
					<UploadImage />
				</FormControl>
				<FormControl>
					<FormLabel>상태</FormLabel>
					<RadioGroup
						defaultValue="active"
						orientation="horizontal"
					>
						<Radio
							value="active"
							label="활성화"
						/>
						<Radio
							value="inactive"
							label="비활성화"
						/>
					</RadioGroup>
				</FormControl>
				<Stack
					direction="row"
					gap={2}
					className="mt-8"
				>
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
