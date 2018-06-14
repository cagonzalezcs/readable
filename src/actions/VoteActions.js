import * as ReadableAPI from '../utils/ReadableAPI';

export const STORE_VOTE_SCORE = 'STORE_VOTE_SCORE';

// Store Vote in Redux Store
export const storeVoteScore = ( id, score ) => ({
	type: STORE_VOTE_SCORE,
	id,
	score
});

export const updateVoteScore = ( id, option, type ) => dispatch => (
	ReadableAPI
		.vote( id, option, type )
		.then( data => dispatch( storeVoteScore( id, data.voteScore )))
);