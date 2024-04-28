export const formatDateKo = (date: Date) =>
	date.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
