import { Button, IconButton, Table } from '@mui/joy'
import { DeleteOutlineRounded } from '@mui/icons-material'

interface Ads {
	title: string
	category: string
	company: string
	createdAt: Date
	likes: number
	views: number
}

const data: Ads[] = [
	{
		title: '코로나19 백신 2차 접종 이벤트',
		category: '의료',
		company: '메디플랫',
		createdAt: new Date('2021-09-01'),
		likes: 10,
		views: 100,
	},
	{
		title: '얼렁뚱땅 곽철이네',
		category: '팝업스토어',
		company: '곽철이네',
		createdAt: new Date('2021-09-01'),
		likes: 53,
		views: 300,
	},
	{
		title: '몰티저스 스페셜 팝업',
		category: '팝업스토어',
		company: '몰티저스',
		createdAt: new Date('2021-09-01'),
		likes: 39,
		views: 848,
	},
	{
		title: '코로나19 백신 2차 접종 이벤트',
		category: '의료',
		company: '메디플랫',
		createdAt: new Date('2021-09-01'),
		likes: 10,
		views: 100,
	},
	{
		title: '얼렁뚱땅 곽철이네',
		category: '팝업스토어',
		company: '곽철이네',
		createdAt: new Date('2021-09-01'),
		likes: 53,
		views: 300,
	},
	{
		title: '몰티저스 스페셜 팝업',
		category: '팝업스토어',
		company: '몰티저스',
		createdAt: new Date('2021-09-01'),
		likes: 39,
		views: 848,
	},
	{
		title: '코로나19 백신 2차 접종 이벤트',
		category: '의료',
		company: '메디플랫',
		createdAt: new Date('2021-09-01'),
		likes: 10,
		views: 100,
	},
	{
		title: '얼렁뚱땅 곽철이네',
		category: '팝업스토어',
		company: '곽철이네',
		createdAt: new Date('2021-09-01'),
		likes: 53,
		views: 300,
	},
	{
		title: '몰티저스 스페셜 팝업',
		category: '팝업스토어',
		company: '몰티저스',
		createdAt: new Date('2021-09-01'),
		likes: 39,
		views: 848,
	},
]

export const ArticleTable = () => {
	return (
		<Table>
			<thead>
				<tr>
					<th style={{ width: '30%' }}>
						광고 제목
					</th>
					<th>카테고리</th>
					<th>회사</th>
					<th>작성일</th>
					<th>좋아요</th>
					<th>조회수</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{data.map(
					(
						{
							title,
							category,
							company,
							createdAt,
							likes,
							views,
						},
						i,
					) => (
						<tr key={i}>
							<td>{title}</td>
							<td>{category}</td>
							<td>{company}</td>
							<td>
								{createdAt.toLocaleDateString(
									'ko-KR',
									{
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									},
								)}
							</td>
							<td>{likes}</td>
							<td>{views}</td>
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
