import { Stack } from '@mui/joy'
import { ArticleTable } from './components/ArticleTable'
import { AppBar } from './components/AppBar'

function App() {
	return (
		<Stack>
			<AppBar />
			<ArticleTable />
		</Stack>
	)
}

export default App
