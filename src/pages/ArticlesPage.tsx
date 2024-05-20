import { ArticleTable } from '../components/ArticleTable'
import { InfoTable } from '../components/InfoTable'

export const ArticlesPage = () => {
	return (
		<InfoTable buttonLink="/articles/new">
			<ArticleTable />
		</InfoTable>
	)
}
