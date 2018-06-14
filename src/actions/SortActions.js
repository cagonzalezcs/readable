export const SET_SORT = 'SET_SORT';

export const setSort = ( orderBy, sort ) => {
	return {
		type: SET_SORT,
		orderBy,
		sort
	}
}