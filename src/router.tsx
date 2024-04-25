import { createBrowserRouter } from 'react-router-dom'
import { ArticlesPage } from './pages/ArticlesPage'
import { CompaniesPage } from './pages/CompaniesPage'
import { AccountsPage } from './pages/AccountsPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <ArticlesPage />,
	},
	{
		path: '/companies',
		element: <CompaniesPage />,
	},
	{
		path: '/accounts',
		element: <AccountsPage />,
	},
])
