import React from 'react';

const SortItemsComponent = ( props ) => (
	<div className="item-sorting-controls">
		<label className="item-sorting-label" htmlFor="postSortingSelector">Sort By</label>
		<select name="item-sorting-selector" id="postSortingSelector" className="item-sorting-selector" defaultValue={ props.orderBy }>
			<option value="descVoteScore">Highest Vote</option>
			<option value="ascVoteScore">Lowest Vote</option>
			<option value="descTimestamp">Latest Posts</option>
			<option value="ascTimestamp">Oldest Posts</option>
		</select>
	</div>
)

export default SortItemsComponent;