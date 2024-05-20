import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Stack,
} from '@mui/joy'
import { InputCaption } from './InputCaption'
import { SelectCompanies } from './SelectCompanies'
import { SelectTags } from './SelectTags'
import { DateTimePicker } from '@mui/x-date-pickers'
import { EventChannel } from './EventChannel'
import { SelectCategories } from './SelectCategories'
import { UploadImage } from './UploadImage'
import { Link } from 'react-router-dom'

export const ArticleForm = () => {
	return (
		<form>
			<Stack gap={3}>
				<FormControl>
					<FormLabel>타이틀</FormLabel>
					<Input placeholder="아티클 제목" />
				</FormControl>
				<Stack direction="row" gap={2}>
					<FormControl className="flex-1">
						<FormLabel>카테고리</FormLabel>
						<SelectCategories />
					</FormControl>
					<FormControl className="flex-1">
						<FormLabel>기업</FormLabel>
						<SelectCompanies />
					</FormControl>
				</Stack>
				<FormControl>
					<FormLabel>피드</FormLabel>
					<UploadImage />
				</FormControl>
				<FormControl>
					<FormLabel>캡션</FormLabel>
					<InputCaption />
				</FormControl>
				<FormControl>
					<FormLabel>이벤트 유형</FormLabel>
					<EventChannel />
				</FormControl>
				<Stack direction="row" gap={2}>
					<FormControl className="flex-1">
						<FormLabel>주소</FormLabel>
						<Input placeholder="서울특별시 강남구 테헤란로44길" />
					</FormControl>
					<FormControl className="flex-1">
						<FormLabel>연락처</FormLabel>
						<Input
							placeholder="010-1234-5678"
							type="tel"
						/>
					</FormControl>
				</Stack>
				<FormControl>
					<FormLabel>게시일</FormLabel>
					<DateTimePicker />
				</FormControl>
				<Stack direction="row" gap={2}>
					<FormControl className="flex-1">
						<FormLabel>이벤트 시작일</FormLabel>
						<DateTimePicker />
					</FormControl>
					<FormControl className="flex-1">
						<FormLabel>이벤트 종료일</FormLabel>
						<DateTimePicker />
					</FormControl>
				</Stack>
				<FormControl>
					<FormLabel>출처 링크</FormLabel>
					<Input placeholder="https://example.com" />
				</FormControl>
				<FormControl>
					<FormLabel>태그</FormLabel>
					<SelectTags />
				</FormControl>
				<Stack
					direction="row"
					gap={2}
					className="mt-8"
				>
					<Button
						variant="outlined"
						className="flex-1"
						component={Link}
						to="/"
					>
						취소
					</Button>
					<Button
						className="flex-1"
						component={Link}
						to="/"
					>
						등록
					</Button>
				</Stack>
			</Stack>
		</form>
	)
}
