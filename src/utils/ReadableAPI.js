const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

let apiToken = localStorage.apiToken;

if( !apiToken ) {
	apiToken = localStorage.apiToken = Math.random().toString(36).substr(-8);
}

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json',
	'Authorization': apiToken
}

// Get Post Categories
export const getCategories = () => {
	return fetch( `${apiURL}/categories`, { headers } )
		.then( response => response.json() )
		.then( data => data.categories )
		.catch( error => { console.log( error ) } );
}

// Get Multiple Posts - Either All Posts or Based on Category
export const getPosts = ( filter ) => {
	const url = filter ? `${apiURL}/${filter}/posts` : `${apiURL}/posts`;

	return fetch( url, { headers } )
		.then( response => response.json() )
		.then( data => data )
		.catch( error => { console.log( error ) } );
}

// Get Single Post
export const getPost = ( id ) => {
	return fetch(`${apiURL}/posts/${id}`, { headers })
		.then( response => response.json() )
		.then( data => data )
		.catch( error => { console.log( error ) } );
}

// Add Post
export const addPost = ( post ) => {
	const postData = {
		...post,
		timestamp: new Date().getTime()
	};

	return fetch(`${apiURL}/posts`, {
		method: 'POST',
		body: JSON.stringify( postData ),
		headers
	}).then( response => response.json() )
		.then( data => data )
		.catch( error => { console.log( error ) } );
}

// Update Post
export const updatePost = ( post ) => {
	const postData = {
		...post,
		timestamp: new Date().getTime()
	};

	return fetch(`${apiURL}/posts/${post.id}`, {
		method: 'PUT',
		body: JSON.stringify( postData ),
		headers
	}).then( response => response.json() )
		.then( data => data )
		.catch( error => { console.log( error ) } );
}

// Delete Post
export const deletePost = ( id ) => {
	return fetch(`${apiURL}/posts/${id}`, {
		method: 'DELETE',
		headers
	}).catch( error => { console.log( error ) } );
}

// Get Post Comments
export const getComments = ( id ) => {
	return fetch(`${apiURL}/posts/${id}/comments`, { headers })
		.then( response => response.json() )
		.then( data => data )
		.catch( error => { console.log( error ) } );
}

// Add New Comment
export const addComment = ( comment ) => {
	const commentData = {
		...comment,
		timestamp: new Date().getTime()
	};

	return fetch(`${apiURL}/comments`, {
		method: 'POST',
		body: JSON.stringify( commentData ),
		headers
	}).then( response => response.json() )
		.then( data => data )
		.catch( error => { console.log( error ) } );
}

// Update Comment
export const updateComment = ( comment ) => {
	const commentData = {
		...comment,
		timestamp: new Date().getTime()
	};

	return fetch(`${apiURL}/comments/${comment.id}`, {
		method: 'PUT',
		body: JSON.stringify( commentData ),
		headers
	}).then( response => response.json() )
		.then( data => data )
		.catch( error => { console.log( error ) } );
}

// Delete Comment
export const deleteComment = ( id ) => {
	return fetch(`${apiURL}/comments/${id}`, {
		method: 'DELETE',
		headers
	}).catch( error => { console.log( error ) } );
}

/**
 * Voting Function
 * @param {string} id - Post/Comment ID
 * @param {string} option - Either upVote or downVote
 * @param {string} type - Either posts or comments
 */
export const vote = ( id, option, type ) => {
	const postData = { id: id, option: option };
	const url = `${apiURL}/${type}/${id}`;

	return fetch( url, {
		method: 'POST',
		body: JSON.stringify( postData ),
		headers
	}).then( response => response.json() )
		.then( data => data)
		.catch( error => { console.log( error ) } );
}
