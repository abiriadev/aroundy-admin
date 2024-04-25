import { KeyboardArrowDown } from '@mui/icons-material'
import {
	FormControl,
	FormLabel,
	Input,
	Box,
	Select,
	Option,
} from '@mui/joy'
import { InputCaption } from './InputCaption'
import { SelectCompanies } from './SelectCompanies'
import { SelectTags } from './SelectTags'
import { DateTimePicker } from '@mui/x-date-pickers'
import { EventChannel } from './EventChannel'

export const ArticleForm = () => {
	return (
		<form>
			<Box
				display="grid"
				gridTemplateColumns="auto 1fr"
				gap={2}
				// className="items-start"
			>
				<FormLabel>타이틀</FormLabel>
				<FormControl>
					<Input placeholder="아티클 제목" />
				</FormControl>

				<FormLabel>카테고리</FormLabel>
				<FormControl>
					<Select
						placeholder="카테고리"
						indicator={<KeyboardArrowDown />}
					>
						<Option value="dog">Dog</Option>
						<Option value="cat">Cat</Option>
					</Select>
				</FormControl>

				<FormLabel>기업</FormLabel>
				<FormControl>
					<SelectCompanies />
				</FormControl>

				<FormLabel>피드</FormLabel>
				<FormControl>
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

				<FormLabel>캡션</FormLabel>
				<FormControl>
					<InputCaption />
				</FormControl>

				<FormLabel>이벤트 유형</FormLabel>
				<FormControl>
					<EventChannel />
				</FormControl>

				<FormLabel>주소</FormLabel>
				<FormControl>
					<Input placeholder="서울특별시 강남구 테헤란로44길" />
				</FormControl>

				<FormLabel>연락처</FormLabel>
				<FormControl>
					<Input
						placeholder="010-1234-5678"
						type="tel"
					/>
				</FormControl>

				<FormLabel>게시일</FormLabel>
				<FormControl>
					<DateTimePicker />
				</FormControl>

				<FormLabel>이벤트 시작일</FormLabel>
				<FormControl>
					<DateTimePicker />
				</FormControl>

				<FormLabel>이벤트 종료일</FormLabel>
				<FormControl>
					<DateTimePicker />
				</FormControl>

				<FormLabel>출처 링크</FormLabel>
				<FormControl>
					<Input placeholder="https://example.com" />
				</FormControl>

				<FormLabel>태그</FormLabel>
				<FormControl>
					<SelectTags />
				</FormControl>
			</Box>
		</form>
	)
}
