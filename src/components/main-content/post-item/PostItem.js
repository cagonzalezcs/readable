import React, { Component } from 'react';
import PostControlsComponent from '../post-controls/PostControls';

class PostItemComponent extends Component {
	render () {
		return (
			<div className="post-item">
				<div className="post-details">
					<div className="post-category">
						<span className="category-link">React</span>
					</div>
					<div className="post-title">
						<h2 className="title">
							<span className="title-link">Udacity is the best place to learn React</span>
						</h2>
					</div>
					<div className="post-meta">
						<div className="post-author">
							<span className="author">Posted by thingone</span>
						</div>
						<div className="post-date">
							<span className="date">on June 28, 2016 9:21 PM</span>
						</div>
					</div>
					<div className="post-excerpt">
						<p className="excerpt">Everyone says so after all.</p>
					</div>
				</div>
				<div className="post-controls-wrapper">
					<PostControlsComponent />
				</div>
			</div>
		)
	}
}

export default PostItemComponent;