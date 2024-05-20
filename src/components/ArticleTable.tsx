import { Button, Chip, IconButton, Table } from '@mui/joy'
import {
	DeleteOutlineRounded,
	EditOutlined,
} from '@mui/icons-material'
import { companies } from '../mocks/data'
import { formatDateKo } from '../utils'
import { Link } from 'react-router-dom'

interface Ads {
	id: string
	title: string
	category: string
	feeds: Array<string>
	caption: string
	type: string
	location: string
	contact: string
	createdAt: Date
	publishAt: Date
	startsAt: Date
	endsAt: Date
	link: string
	company: {
		id: string
		name: string
		logo: string
	}
	tags: Array<{
		id: string
		displayName: string
	}>
	likes: number
	views: number
}

export const ArticleTable = () => {
	return (
		<Table>
			<thead>
				<tr>
					<th>카테고리</th>
					<th>기업 로고</th>
					<th>기업</th>
					<th>채널</th>
					<th>타이틀</th>
					<th>지역</th>
					<th>태그</th>
					<th>좋아요</th>
					<th>조회수</th>
					<th>등록일</th>
					<th>게시일</th>
					<th>이벤트 시작일</th>
					<th>이벤트 종료일</th>
					<th>링크</th>
					<th>수정</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				{data.map(
					({
						id,
						title,
						category,
						feeds,
						caption,
						type,
						location,
						contact,
						createdAt,
						publishAt,
						startsAt,
						endsAt,
						link,
						company,
						tags,
						likes,
						views,
					}) => (
						<tr
							key={id}
							// className="text-nowrap"
						>
							<td>{category}</td>
							<td>
								<img
									src={company.logo}
									height={20}
								/>
							</td>
							<td>
								<div className="flex items-center gap-2">
									<span>
										{company.name}
									</span>
								</div>
							</td>
							<td>
								<Chip color="warning">
									{type}
								</Chip>
							</td>
							<td>{title}</td>
							<td>{location}</td>
							<td>
								{tags.map(
									({ displayName }) => (
										<Chip>
											{displayName}
										</Chip>
									),
								)}
							</td>
							<td>{likes}</td>
							<td>{views}</td>
							<td>
								{formatDateKo(createdAt)}
							</td>
							<td>
								{formatDateKo(publishAt)}
							</td>
							<td>
								{formatDateKo(startsAt)}
							</td>
							<td>{formatDateKo(endsAt)}</td>
							<td>
								<a href={link}>이동</a>
							</td>
							<td>
								<IconButton
									color="primary"
									component={Link}
									to={`/articles/${id}`}
								>
									<EditOutlined />
								</IconButton>
							</td>
							<td>
								<IconButton color="danger">
									<DeleteOutlineRounded />
								</IconButton>
							</td>
						</tr>
					),
				)}
			</tbody>
		</Table>
	)
}

const data: Ads[] = [
	{
		id: '1',
		title: '코로나19 백신 2차 접종 이벤트',
		category: '의료',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[0],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 10,
		views: 100,
	},
	{
		id: '2',
		title: '얼렁뚱땅 곽철이네',
		category: '팝업스토어',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[1],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 53,
		views: 300,
	},
	{
		id: '3',
		title: '몰티저스 스페셜 팝업',
		category: '팝업스토어',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[2],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 39,
		views: 848,
	},
	{
		id: '4',
		title: '코로나19 백신 2차 접종 이벤트',
		category: '의료',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[3],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 10,
		views: 100,
	},
	{
		id: '5',
		title: '얼렁뚱땅 곽철이네',
		category: '팝업스토어',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[4],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 53,
		views: 300,
	},
	{
		id: '6',
		title: '몰티저스 스페셜 팝업',
		category: '팝업스토어',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[5],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 39,
		views: 848,
	},
	{
		id: '7',
		title: '코로나19 백신 2차 접종 이벤트',
		category: '의료',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[6],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 10,
		views: 100,
	},
	{
		id: '8',
		title: '얼렁뚱땅 곽철이네',
		category: '팝업스토어',
		feeds: [],
		caption: '',
		type: 'online',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[7],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 53,
		views: 300,
	},
	{
		id: '9',
		title: '몰티저스 스페셜 팝업',
		category: '팝업스토어',
		feeds: [],
		caption: '',
		type: 'offline',
		location: '서울특별시 강남구 테헤란로44길',
		contact: '010-1234-5678',
		company: companies[8],
		createdAt: new Date('2021-09-01'),
		publishAt: new Date('2021-09-01'),
		startsAt: new Date('2021-09-01'),
		endsAt: new Date('2021-09-01'),
		link: 'https://example.com',
		tags: [
			{
				id: '1',
				displayName: '코로나19',
			},
		],
		likes: 39,
		views: 848,
	},
]
