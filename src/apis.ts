export interface Company {
	name: string
	logo: string
}

export interface Paginate<T> {
	items: Array<T>
}

export const fetchCompanies = async () => {
	return (
		(await (
			await fetch('/api/companies')
		).json()) as Paginate<Company>
	).items
}
