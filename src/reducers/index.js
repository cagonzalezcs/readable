import { combineReducers } from 'redux'

import categories from './CategoryReducers';
import posts from './PostReducers';
import sort from './SortReducers';


export default combineReducers({
	categories,
	posts,
	sort
})