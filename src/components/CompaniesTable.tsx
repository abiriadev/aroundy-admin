import { Button, Chip, IconButton, Table } from '@mui/joy'
import { useEffect, useState } from 'react'
import { Company, fetchCompanies } from '../apis'
import {
	DeleteOutlineRounded,
	EditOutlined,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const CompaniesTable = () => {
	const [companies, setCompanies] = useState<
		Array<Company>
	>([])

	useEffect(
		() =>
			void (async () =>
				setCompanies(await fetchCompanies()))(),
		[],
	)

	return (
		<Table>
			<thead>
				<tr>
					<th style={{ width: '30%' }}>기업명</th>
					<th>로고</th>
					<th>상태</th>
					<th>수정</th>
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				{companies.map(({ id, name, logo }, i) => (
					<tr key={i}>
						<td>{name}</td>
						<td>
							<img src={logo} width={40} />
						</td>
						<td>
							<Chip color="success">
								활성
							</Chip>
						</td>
						<IconButton
							color="primary"
							component={Link}
							to={`/articles/${id}`}
						>
							<EditOutlined />
						</IconButton>
						<td>
							<IconButton color="danger">
								<DeleteOutlineRounded />
							</IconButton>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}
