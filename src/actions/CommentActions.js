import * as ReadableAPI from '../utils/ReadableAPI';

// Multiple Comments Actions
export const STORE_COMMENTS = 'STORE_COMMENTS';

// Single Comment Actions
export const STORE_COMMENT = 'STORE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

// Get All Comments of Post
export const getComments = ( parentId ) => ( dispatch ) => (
	ReadableAPI
		.getComments( parentId )
		.then( ( comments ) => dispatch( storeComments( parentId, comments )))
)

// Store All Comments of Post
export const storeComments = ( parentId, comments ) => {
	return {
		type: STORE_COMMENTS,
		parentId,
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