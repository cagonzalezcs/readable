import React, { Component } from 'react';
import PostControlsComponent from '../post-controls/PostControls';

class SinglePostComponent extends Component {
	render () {
		return (
			<div className="single-post-content-area">
				<div className="single-post">
					<div className="post-title">
						<h1>Udacity is the best place to learn React</h1>
					</div>
					<div className="post-meta">
						<div className="author">
							<span>Posted by thingtwo</span>
						</div>
						<div className="date">
							<span>on June 28, 2016 9:21 PM</span>
						</div>
					</div>
					<div className="post-content">
						<p>Everyone says so after all.</p>
					</div>
					<div className="post-controls-wrapper">
						<PostControlsComponent />
					</div>
					<div className="post-comments">
						<div className="comments-title">
							<h4>2 Comments on this Post:</h4>
						</div>
						<ul className="comments-list">
							<li className="comment-item">
								<span className="comment-author">thingtwo</span>
								<p className="comment-body">Hi there! I am a COMMENT.</p>
								<div className="comment-controls"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default SinglePostComponent;