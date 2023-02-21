export const addById = (arr, id, obj) =>
	arr.map((el, i) =>
		(i === id) ? [...el, obj] : el)
