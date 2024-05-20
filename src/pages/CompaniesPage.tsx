import { CompaniesTable } from '../components/CompaniesTable'
import { InfoTable } from '../components/InfoTable'

export const CompaniesPage = () => {
	return (
		<InfoTable buttonLink="/companies/new">
			<CompaniesTable />
		</InfoTable>
	)
}
