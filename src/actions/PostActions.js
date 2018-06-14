import * as ReadableAPI from '../utils/ReadableAPI';

// Multiple Posts Actions
export const STORE_POSTS = 'STORE_POSTS';

// Individual Post Actions
export const STORE_POST = 'STORE_POST';
export const STORE_NEW_POST = 'STORE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';

// Get Multiple Posts from API
export const getPosts = ( filter ) => ( dispatch ) => (
	ReadableAPI
		.getPosts( filter )
		.then( ( posts ) => dispatch( storePosts( posts )))
)

// Store Multiple Posts
export const storePosts = ( posts ) => {
	return {
		type: STORE_POSTS,
		posts
	}
}

// Get Single Post from API by ID
export const getPost = ( id ) => ( dispatch ) => {
	return ReadableAPI
		.getPost( id )
		.then( ( post ) => dispatch( storePost( post )));
}

// Store Single Post
export const storePost = ( post ) => {
	return {
		type: STORE_POST,
		post
	}
}

export const updatePost = ( post ) => ( dispatch ) => {
	ReadableAPI
		.updatePost( post )
		.then( ( data ) => dispatch( storePost( data )));
}

// Add Post
export const addPost = ( post ) => ( dispatch ) => {
	ReadableAPI
		.addPost( post )
		.then( ( data ) => dispatch( storeNewPost( data )));
}

// Store New Post
export const storeNewPost = ( post ) => {
	return {
		type: STORE_NEW_POST,
		post
	}
}

// Delete Post from API
export const deletePost = ( post ) => ( dispatch ) => {
	return ReadableAPI
		.deletePost( post.id )
		.then( dispatch( removePost( post )));
}

// Remove Post from Store
export const removePost = ( post ) => {
	return {
		type: REMOVE_POST,
		post
	}
}