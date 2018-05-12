import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SortPostsComponent from './sort-posts/SortPosts';
import ListPostsComponent from './list-posts/ListPosts';

class MainContentAreaComponent extends Component {
	render () {
		return (
			<div className="main-content-area">
				<div className="main-content-header">
					<div className="main-content-area-title">
						<h1>All Readable Posts</h1>
					</div>
					<div className="post-sorting">
						<SortPostsComponent />
					</div>
				</div>
				<div className="post-list-container">
					<ListPostsComponent />
				</div>
			</div>
		)
	}
}

export default MainContentAreaComponent;