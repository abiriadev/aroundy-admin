import { Grid } from '@mui/joy'
import { CompanyForm } from '../components/CompanyForm'

export const NewCompanyPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid xs></Grid>
			<Grid xs={6}>
				<h2>새 기업 등록</h2>
				<CompanyForm />
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
