import {
	STORE_POST,
	REMOVE_POST
} from '../actions/PostActions';

const post = (state = {}, action) => {
	const { post } = action;
	switch ( action.type ) {
		case STORE_POST:
			return {
				...state,
				post
			};
		case REMOVE_POST:
			return {
				...state,
				post: undefined
			};
		default:
			return state;
	}
}


export default post;