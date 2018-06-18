import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../../../../actions/CommentActions.js';
import FormSerialize from 'form-serialize';
import uuid from 'uuid';

class AddCommentComponent extends Component {

	addNewComment = ( event ) => {
		event.preventDefault();
		const postID = this.props.post.id;
		const serializedComment = FormSerialize(event.target, {hash: true});
		const commentID = uuid();
		const comment = {
			...serializedComment,
			id: commentID,
			parentId: postID
		}

		this.props.addComment( comment );
	}

	handleCommentSubmission = ( event ) => {
		event.preventDefault();
		this.addNewComment( event );
		this.commentForm.reset();
	}

	render () {

		const { comments } = this.props;

		return (
			<div className="add-comment-wrapper">
				<div className="add-comment-title">
					<h6>
						{comments.length ? "Add Your Comment:" : "Be the First to Comment!"}
					</h6>
				</div>
				<form
					onSubmit={ this.handleCommentSubmission }
					ref={ ( commentForm ) => this.commentForm = commentForm }>
					<div className="input-group">
						<label htmlFor="author">Your Name</label>
						<input
							type="text"
							id="author"
							name="author"
							className="input-item"
							placeholder="Enter Your Name"
							required />
					</div>
					<div className="input-group">
						<label htmlFor="commentBody">Your Comment</label>
						<textarea
							name="body"
							id="commentBody"
							rows="4"
							placeholder="Enter Your Comment"
							required></textarea>
					</div>
					<div className="input-group">
						<input type="submit" value="Submit Comment" />
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = ({ post }) => ({
	post: post.post ? post.post : post
})

export default connect(mapStateToProps, { addComment })(AddCommentComponent);