import { combineReducers } from 'redux'

import categories from './CategoryReducers';
import posts from './PostReducers';


export default combineReducers({
	categories,
	posts
})