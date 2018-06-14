import {
	STORE_VOTE_SCORE
} from '../actions/VoteActions';

const vote = ( state={}, action ) => {
	const { id, score } = action;
	switch( action.type ) {
		case STORE_VOTE_SCORE:
			return {
				...state,
				[id]: score
			};
		default:
			return state;
	}
}

export default vote;