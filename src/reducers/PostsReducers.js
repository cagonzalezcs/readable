import {
	STORE_POSTS,
	STORE_POST,
	STORE_NEW_POST,
	REMOVE_POST
} from '../actions/PostActions';

import {
	STORE_VOTE_SCORE
} from '../actions/VoteActions';

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
		case STORE_VOTE_SCORE:
			const { id, score } = action;
			if ( state.posts !== undefined ) {
				return {
					...state,
					posts: state.posts.map(  p => {
						if ( p.id === id ) p.voteScore = score;
						return p;
					} )
				}
			} else {
				return state;
			}
		default:
			return state;
	}
}

export default posts;