import {
	STORE_COMMENTS,
	STORE_COMMENT,
	REMOVE_COMMENT
} from '../actions/CommentActions';

const comments = (state = {}, action) => {
	const { postID, comments, comment } = action;

	switch ( action.type ) {
		case STORE_COMMENTS:
			return {
				...state,
				[postID]: comments
			};
		case STORE_COMMENT:
			const existingComments = state[comment.parentID].filter( data => data.id === comment.id ).length;
			return {
				...state,
				[comment.parentID]: existingComments ?
					state[comment.parentID].map( data => data.id === comment.id ? comment : data ) :
					state[comment.parentID].concat( comment )
			};
		case REMOVE_COMMENT:
			return {
				...state,
				[comment.parentID]: state[comment.parentID].filter( data => data.id !== comment.id )
			};
		default:
			return state;
	}
}

export default comments;