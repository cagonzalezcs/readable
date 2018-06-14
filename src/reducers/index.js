import { combineReducers } from 'redux'

import categories from './CategoryReducers';
import post from './PostReducers';
import posts from './PostsReducers';
import sort from './SortReducers';
import comments from './CommentReducers';
import vote from './VoteReducers';

export default combineReducers({
	categories,
	post,
	posts,
	sort,
	comments,
	vote
})