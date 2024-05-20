import {
	FormControl,
	FormLabel,
	Input,
	Box,
	ButtonGroup,
	Button,
	Stack,
} from '@mui/joy'
import { InputCaption } from './InputCaption'
import { SelectCompanies } from './SelectCompanies'
import { SelectTags } from './SelectTags'
import { DateTimePicker } from '@mui/x-date-pickers'
import { EventChannel } from './EventChannel'
import { SelectCategories } from './SelectCategories'

export const ArticleForm = () => {
	return (
		<form>
			<Stack gap={3}>
				<FormControl>
					<FormLabel>타이틀</FormLabel>
					<Input placeholder="아티클 제목" />
				</FormControl>
				<FormControl>
					<FormLabel>카테고리</FormLabel>
					<SelectCategories />
				</FormControl>
				<FormControl>
					<FormLabel>기업</FormLabel>
					<SelectCompanies />
				</FormControl>
				<FormControl>
					<FormLabel>피드</FormLabel>
					<Input
						placeholder="사진"
						type="file"
						slotProps={{
							input: {
								multiple: true,
							},
						}}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>캡션</FormLabel>
					<InputCaption />
				</FormControl>
				<FormControl>
					<FormLabel>이벤트 유형</FormLabel>
					<EventChannel />
				</FormControl>
				<FormControl>
					<FormLabel>주소</FormLabel>
					<Input placeholder="서울특별시 강남구 테헤란로44길" />
				</FormControl>
				<FormControl>
					<FormLabel>연락처</FormLabel>
					<Input
						placeholder="010-1234-5678"
						type="tel"
					/>
				</FormControl>
				<FormControl>
					<FormLabel>게시일</FormLabel>
					<DateTimePicker />
				</FormControl>
				<FormControl>
					<FormLabel>이벤트 시작일</FormLabel>
					<DateTimePicker />
				</FormControl>
				<FormControl>
					<FormLabel>이벤트 종료일</FormLabel>
					<DateTimePicker />
				</FormControl>
				<FormControl>
					<FormLabel>출처 링크</FormLabel>
					<Input placeholder="https://example.com" />
				</FormControl>
				<FormControl>
					<FormLabel>태그</FormLabel>
					<SelectTags />
				</FormControl>
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
