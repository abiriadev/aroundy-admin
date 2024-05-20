import { companies } from './mocks/data.ts'

export interface Company {
	id: string
	name: string
	logo: string
}

export interface Paginate<T> {
	items: Array<T>
}

export const fetchCompanies = async () => {
	// return (
	// 	(await (
	// 		await fetch('/api/companies')
	// 	).json()) as Paginate<Company>
	// ).items
	return companies
}
