import { companies } from './mocks/data.ts'

export interface ArticleData {
	id: string
	title: string
	category: string
	feeds: Array<string>
	caption: string
	type: string
	location: string
	contact: string
	createdAt: Date
	publishAt: Date
	startsAt: Date
	endsAt: Date
	link: string
	company: {
		id: string
		name: string
		logo: string
	}
	tags: Array<{
		id: string
		displayName: string
	}>
	likes: number
	views: number
}

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
