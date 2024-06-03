import { Grid } from '@mui/joy'
import { ArticleForm } from '../components/ArticleForm'

export const ArticleEditPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid xs></Grid>
			<Grid xs={6}>
				<h2>포스트 수정</h2>
				<ArticleForm />
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
