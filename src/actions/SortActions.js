export const SET_SORT = 'SET_SORT';

export const setSort = ( orderBy ) => {
	return {
		type: SET_SORT,
		orderBy
	}
}