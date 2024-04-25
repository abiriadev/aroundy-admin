import { http, HttpResponse } from 'msw'
import { companies } from './data'

export const handlers = [
	http.get('/api/companies', () =>
		HttpResponse.json({
			items: companies,
		}),
	),
]
