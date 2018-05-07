const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/'

let apiToken = localStorage.apiToken
if( !apiToken ) {
	apiToken = localStorage.apiToken = Math.random().toString(36).substr(-8)
}

const headers = {
	'Accept': 'application/json',
	'Authorization': apiToken
}

// Get Post Categories
export const getCategories = () => {
	fetch( `${apiURL}/categories`, { headers } ).
		then( response => response.json() ).
		then( data => data.categories )
}

// Get Multiple Posts
export const getPosts = ( filter ) => {
	const url = filter ? `${apiURL}/${filter}/posts` : `${apiURL}/posts`
	return fetch( url, { headers } ).
		then( response => response.json() ).
		then( data => data )
}
// Get Single Post
export const getPost = ( id ) => {
	fetch(`${apiURL}/posts/${id}`, { headers }).
		then( repsonse => response.json() ).
		then( data => data )
}