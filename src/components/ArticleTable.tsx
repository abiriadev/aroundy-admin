import { Button, Chip, IconButton, Table } from '@mui/joy'
import {
	DeleteOutlineRounded,
	EditOutlined,
} from '@mui/icons-material'
import { formatDateKo } from '../utils'
import { Link } from 'react-router-dom'
import { articles } from '../mocks/data'

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
				{articles.map(
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
