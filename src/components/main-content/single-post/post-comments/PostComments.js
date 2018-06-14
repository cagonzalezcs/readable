import React, { Component } from 'react';
import SingleCommentComponent from './single-comment/SingleComment';

class PostCommentsComponent extends Component {

	sortComments = ( comments ) => {
		if( comments !== undefined ) {
			return comments.sort( ( commentA, commentB ) => commentA.voteScore < commentB.voteScore );
		} else {
			return comments;
		}
	}

	handleSubmission = ( event ) => {
		event.preventDefault();
		this.props.onCommentSubmission( event );
		this.commentForm.reset();
	}

	render () {
		const { comments } = this.props;

		return (
			<div id="post-comments" className="post-comments">
				<div className="comments-title">
					<h4>{ comments.length ? `${comments.length} Comments on this Post:` : "No Comments on This Post" }</h4>
				</div>
				<ul className="comments-list">
					{ this.sortComments( comments ).map( comment => (
						<SingleCommentComponent
							key={ comment.id }
							comment={ comment }
						/>
					))}
				</ul>
			</div>
		)
	}
}

export default PostCommentsComponent;