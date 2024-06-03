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
import { useForm } from 'react-hook-form'

export interface ArticleFormProps {
	title: string
	categoryId: string
	companyId: string
	caption: string
	eventType: string
	address: string
	contact: string
	publishAt: Date
	startsAt: Date
	endsAt: Date
	link: string
	tags: string[]
}

export const ArticleForm = ({
	title,
	categoryId,
	companyId,
	caption,
	eventType,
	address,
	contact,
	publishAt,
	startsAt,
	endsAt,
	link,
	tags,
}: Partial<ArticleFormProps>) => {
	const { register } = useForm<ArticleFormProps>()

	return (
		<form>
			<Stack gap={3}>
				<FormControl>
					<FormLabel>타이틀</FormLabel>
					<Input
						placeholder="아티클 제목"
						defaultValue={title}
						{...register('title')}
					/>
				</FormControl>
				<Stack direction="row" gap={2}>
					<FormControl className="flex-1">
						<FormLabel>카테고리</FormLabel>
						<SelectCategories
							defaultValue={categoryId}
							{...register('categoryId')}
						/>
					</FormControl>
					<FormControl className="flex-1">
						<FormLabel>기업</FormLabel>
						<SelectCompanies
							defaultValue={companyId}
							{...register('companyId')}
						/>
					</FormControl>
				</Stack>
				<FormControl>
					<FormLabel>피드</FormLabel>
					<UploadImage />
				</FormControl>
				<FormControl>
					<FormLabel>캡션</FormLabel>
					<InputCaption
						defaultValue={caption}
						{...register('caption')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>이벤트 유형</FormLabel>
					<EventChannel
						defaultValue={eventType}
						{...register('eventType')}
					/>
				</FormControl>
				<Stack direction="row" gap={2}>
					<FormControl className="flex-1">
						<FormLabel>주소</FormLabel>
						<Input
							placeholder="서울특별시 강남구 테헤란로44길"
							defaultValue={address}
							{...register('address')}
						/>
					</FormControl>
					<FormControl className="flex-1">
						<FormLabel>지점명</FormLabel>
						<Input placeholder="스타벅스" />
					</FormControl>
				</Stack>
				<FormControl>
					<FormLabel>연락처</FormLabel>
					<Input
						placeholder="010-1234-5678"
						type="tel"
						defaultValue={contact}
						{...register('contact')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>게시일</FormLabel>
					<DateTimePicker
						defaultValue={publishAt}
						{...register('publishAt')}
					/>
				</FormControl>
				<Stack direction="row" gap={2}>
					<FormControl className="flex-1">
						<FormLabel>이벤트 시작일</FormLabel>
						<DateTimePicker
							defaultValue={startsAt}
							{...register('startsAt')}
						/>
					</FormControl>
					<FormControl className="flex-1">
						<FormLabel>이벤트 종료일</FormLabel>
						<DateTimePicker
							defaultValue={endsAt}
							{...register('endsAt')}
						/>
					</FormControl>
				</Stack>
				<FormControl>
					<FormLabel>출처 링크</FormLabel>
					<Input
						placeholder="https://example.com"
						defaultValue={link}
						{...register('link')}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>태그</FormLabel>
					<SelectTags
						defaultValue={tags}
						{...register('tags')}
					/>
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
