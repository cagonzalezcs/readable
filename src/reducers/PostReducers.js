import {
	STORE_POSTS,
	STORE_POST,
	STORE_NEW_POST,
	REMOVE_POST
} from '../actions/PostActions';

const posts = ( state={}, action ) => {
	const { post, posts } = action;
	switch ( action.type ) {
		case STORE_POSTS:
			return {
				...state,
				posts
			};
		case STORE_POST:
			return {
				...state,
				post
			};
		case STORE_NEW_POST:
			return {
				...state,
				posts: state.posts.concat(post)
			};
		case REMOVE_POST:
			return {
				...state,
				post: undefined,
				posts: state.posts.filter( items => items.id !== post.id )
			};
		default:
			return state;
	}
}


export default posts;