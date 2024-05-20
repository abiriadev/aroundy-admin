import { Grid } from '@mui/joy'
import { ArticleForm } from '../components/ArticleForm'

export const NewArticlePage = () => {
	return (
		<Grid container spacing={3}>
			<Grid xs></Grid>
			<Grid xs={6}>
				<h2>새 포스트 생성</h2>
				<ArticleForm />
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
