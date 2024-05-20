import { createBrowserRouter } from 'react-router-dom'
import { ArticlesPage } from './pages/ArticlesPage'
import { CompaniesPage } from './pages/CompaniesPage'
import { AccountsPage } from './pages/AccountsPage'
import { Layout } from './pages/Layout'
import { LoginPage } from './pages/LoginPage'
import { ArticleForm } from './components/ArticleForm'

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
				element: <ArticleForm />,
			},
			{
				path: '/companies',
				element: <CompaniesPage />,
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
