import { Button, Chip, Table } from '@mui/joy'
import { useEffect, useState } from 'react'
import { Company, fetchCompanies } from '../apis'

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
					<th>삭제</th>
				</tr>
			</thead>
			<tbody>
				{companies.map(({ name, logo }, i) => (
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
						<td>
							<Button color="danger">
								삭제
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}
