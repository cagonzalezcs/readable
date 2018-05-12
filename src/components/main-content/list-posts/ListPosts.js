import React, { Component } from 'react';
import PostItemComponent from '../post-item/PostItem';

class ListPostsComponent extends Component {
	render () {
		return (
			<div className="post-list">
				<PostItemComponent />
			</div>
		)
	}
}

export default ListPostsComponent;