import {
	SET_SORT
} from '../actions/SortActions';

const sort = ( state={}, action ) => {
	const { orderBy } = action;
	switch( action.type ) {
		case SET_SORT:
			return {
				...state,
				orderBy
			};
		default:
			return state;
	}
}

export default sort;