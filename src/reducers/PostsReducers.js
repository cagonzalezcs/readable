import {
	STORE_POSTS,
	STORE_POST,
	STORE_NEW_POST,
	REMOVE_POST
} from '../actions/PostActions';

const posts = ( state={}, action ) => {
	const { posts, post } = action;
	switch( action.type ) {
		case STORE_POSTS:
			return {
				...state,
				posts
			};
		case STORE_NEW_POST:
			return {
				...state,
				posts: state.posts.concat(post)
			};
		case STORE_POST:
			return state.posts !== undefined ? {
				...state,
				posts: state.posts.map( p => p.id === post.id ? post : p )
			} : state;
		case REMOVE_POST:
			return {
				...state,
				posts: state.posts.filter( p => p.id !== post.id )
			};
		default:
			return state;
	}
}

export default posts;