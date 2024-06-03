import { Grid } from '@mui/joy'
import { ArticleForm } from '../components/ArticleForm'
import { useParams } from 'react-router-dom'
import { articles } from '../mocks/data'

export const ArticleEditPage = () => {
	const { id } = useParams()

	return (
		<Grid container spacing={3}>
			<Grid xs></Grid>
			<Grid xs={6}>
				<h2>포스트 수정</h2>
				<ArticleForm
					{...(articles.find(_ => _.id === id) ??
						{})}
				/>
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
