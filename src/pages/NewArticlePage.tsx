import { Grid } from '@mui/joy'
import { ArticleForm } from '../components/ArticleForm'

export const NewArticlePage = () => {
	return (
		<Grid container spacing={3}>
			<Grid xs></Grid>
			<Grid xs={6}>
				<ArticleForm />
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
