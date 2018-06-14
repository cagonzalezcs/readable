import * as ReadableAPI from '../utils/ReadableAPI';

// Multiple Comments Actions
export const STORE_COMMENTS = 'STORE_COMMENTS';

// Single Comment Actions
export const STORE_COMMENT = 'STORE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

// Get All Comments of Post
export const getComments = ( postID ) => ( dispatch ) => (
	ReadableAPI
		.getComments( postID )
		.then( ( comments ) => dispatch( storeComments( postID, comments )))
)

// Store All Comments of Post
export const storeComments = ( postID, comments ) => {
	return {
		type: STORE_COMMENTS,
		postID,
		comments
	}
}

// Add New Comment
export const addComment = ( comment ) => ( dispatch ) => (
	ReadableAPI
		.addComment( comment )
		.then( ( data ) => dispatch( storeComment( data )))
)
// Store New Comment
export const storeComment = ( comment ) => {
	return {
		type: STORE_COMMENT,
		comment
	}
}

// Delete Comment from API
export const deleteComment = ( comment ) => ( dispatch ) => (
	ReadableAPI
		.deleteComment( comment.id )
		.then( dispatch( removeComment( comment )))
)

// Remove Coment from Store
export const removeComment = ( comment ) => {
	return {
		type: REMOVE_COMMENT,
		comment
	}
}

// Update Comment
export const updateComment = ( comment ) => ( dispatch ) => (
	ReadableAPI
		.updateComment( comment )
		.then( ( data ) => dispatch( storeComment( data )))
)