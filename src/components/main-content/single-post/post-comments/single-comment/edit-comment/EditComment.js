import React, { Component } from 'react';


class EditCommentCompontent extends Component {

	render () {
		const { comment, onEditSumbit, onCancelEdit } = this.props;
		return (
			<div className="comment-edit-wrapper">
				<div className="edit-comment-header">
					<span>Edit Comment</span>
				</div>
				<form
				ref={ ( commentUpdateForm ) => this.commentUpdateForm = commentUpdateForm }
				onSubmit={ onEditSumbit }
				>
					<div className="comment-edit-body">
						<div className="input-group">
							<label htmlFor="commentAuthor">Your Name</label>
							<input
								type="text"
								name="author"
								placeholder="Edit Your Name"
								className="input-item"
								id="commentAuthor"
								defaultValue={comment.author}
								required />
						</div>
						<div className="input-group">
							<label htmlFor="commentBody">Your Comment</label>
							<textarea
								className="input-item"
								name="body"
								rows="4"
								placeholder="Edit Your Comment"
								defaultValue={comment.body}
								required />
						</div>
					</div>
					<div className="comment-edit-footer">
						<div className="input-group">
							<button
								className="cancel-edit"
								onClick={onCancelEdit}>
								Cancel
							</button>
							<input
								type="submit"
								value="Edit Comment"
								className="submit-edit" />
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default EditCommentCompontent;