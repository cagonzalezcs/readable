import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserControlsComponent from '../user-controls/UserControls';
import PostCommentsComponent from './post-comments/PostComments';
import { getPost } from '../../../actions/PostActions.js';
import moment from 'moment';


class SinglePostComponent extends Component {
	componentDidMount() {
		const postID = this.props.match.params.id || false;
		this.props.getPost( postID );
	}

	componentWillReceiveProps( nextProps ) {
		if( nextProps.match.params.id !== this.props.match.params.id ) {
			const id = this.props.match.params.id || false;
			this.props.getPost(id);
		}
	}

	render () {

		const { post, comments } = this.props;
		const postComments = comments[ post.id ] || [];

		return (
			<article className="single-post-content-area">
				{ post && post.title ? (
					<div className="single-post">
						<div className="post-title">
							<h1>{ post.title }</h1>
						</div>
						<div className="post-meta">
							<div className="author">
								<span>Posted by { post.author }</span>
							</div>
							<div className="date">
								<span>on { moment( post.timestamp ).format('MMMM Do YYYY, h:mm a') }</span>
							</div>
						</div>
						<div className="post-content">
							<p>{ post.body }</p>
						</div>
						<div className="user-controls-wrapper">
							<UserControlsComponent
								post={post}
							/>
						</div>
						<div className="post-comments-wrapper">
							{ postComments && (
								<PostCommentsComponent
									comments={ postComments }
								/>
							)}
						</div>
					</div>
				) : (
					<span className="post-dne">
						This Post Does Not Exist
					</span>
				)}

			</article>
		)
	}
}

const mapStateToProps = ({ post, comments }) => ({
	post: post.post ? post.post : post,
	comments
})

export default connect(mapStateToProps, { getPost })(SinglePostComponent);