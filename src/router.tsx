import { createBrowserRouter } from 'react-router-dom'
import { ArticlesPage } from './pages/ArticlesPage'
import { CompaniesPage } from './pages/CompaniesPage'
import { AccountsPage } from './pages/AccountsPage'
import { Layout } from './pages/Layout'
import { LoginPage } from './pages/LoginPage'
import { ArticleForm } from './components/ArticleForm'
import { Grid } from '@mui/joy'
import { CompanyForm } from './components/CompanyForm'
import { NewArticlePage } from './pages/NewArticlePage'
import { NewCompanyPage } from './pages/NewCompanyPage'
import { ArticleEditPage } from './pages/ArticleEditPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <ArticlesPage />,
			},
			{
				path: '/articles/new',
				element: <NewArticlePage />,
			},
			{
				path: '/articles/:id',
				element: <ArticleEditPage />,
			},
			{
				path: '/companies',
				element: <CompaniesPage />,
			},
			{
				path: '/companies/new',
				element: <NewCompanyPage />,
			},
			{
				path: '/companies/:id',
				element: <NewCompanyPage />,
			},
			{
				path: '/accounts',
				element: <AccountsPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
])
