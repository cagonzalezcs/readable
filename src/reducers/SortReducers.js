import {
	SET_SORT
} from '../actions/SortActions';

const sort = (state = {}, action) => {
	const { orderBy, sort } = action;
	switch( action.type ) {
		case SET_SORT:
			return {
				...state,
				orderBy,
				sort
			};
		default:
			return state;
	}
}

export default sort;