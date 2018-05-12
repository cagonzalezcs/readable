import React, { Component } from 'react';

class SortPostsComponent extends Component {
	render () {
		return (
			<div className="post-sorting-controls">
				<span className="post-sorting-label">Sort By</span>
				<select name="post-sorting-selector" id="postSortingSelector" className="post-sorting-selector" defaultValue="descTimestamp">
					<option value="descVoteScore">Highest Vote</option>
					<option value="ascVoteScore">Lowest Vote</option>
					<option value="descTimestamp">Latest Posts</option>
					<option value="ascTimestamp">Oldest Posts</option>
					<option value="alpha">Alphabetical</option>
				</select>
			</div>
		)
	}
}

export default SortPostsComponent;