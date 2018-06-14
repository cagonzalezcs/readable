import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserControlsComponent from '../../user-controls/UserControls';
import moment from 'moment';

class PostItemComponent extends Component {

	render () {
		const { post } = this.props;

		return (
			<div
				className="post-item"
				key={ post.id }>
				<div className="post-details">
					<div className="post-category">
						<Link
							to={`/${post.category}`}
							className="category-link">
							{ post.category }
						</Link>
					</div>
					<div className="post-title">
						<h2 className="title">
							<Link
								to={`/${post.category}/${post.id}`}
								className="title-link">
								{ post.title }
							</Link>
						</h2>
					</div>
					<div className="post-meta">
						<div className="post-author">
							<span className="author">Posted by { post.author }</span>
						</div>
						<div className="post-date">
							<span className="date"> { moment(post.timestamp).fromNow() }</span>
						</div>
					</div>
					<div className="post-excerpt">
						<p className="excerpt">{ post.body.substring(0, 250) }...</p>
						<Link
							to={`/${post.category}/${post.id}`}
							className="post-link button">View Post</Link>
					</div>
				</div>
				<div className="user-controls-wrapper">
					<UserControlsComponent
						post={post}
					/>
				</div>
			</div>
		)
	}
}

export default PostItemComponent;