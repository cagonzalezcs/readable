import {
	STORE_COMMENTS,
	STORE_COMMENT,
	REMOVE_COMMENT
} from '../actions/CommentActions';

const comments = (state = {}, action) => {
	const { comment } = action;

	switch ( action.type ) {
		case STORE_COMMENTS:
			const { parentId, comments } = action;
			return {
				...state,
				[parentId]: comments
			};
		case STORE_COMMENT:
			console.log(comment)
			const existingComment = state[comment.parentId].filter( data => data.id === comment.id ).length;
			return {
				...state,
				[comment.parentId]: existingComment ?
					state[comment.parentId].map( data => data.id === comment.id ? comment : data ) :
					state[comment.parentId].concat( comment )
			};
		case REMOVE_COMMENT:
			return {
				...state,
				[comment.parentId]: state[comment.parentId].filter( data => data.id !== comment.id )
			};
		default:
			return state;
	}
}

export default comments;