import React, { Component } from 'react';
import SingleCommentComponent from './single-comment/SingleComment';
import AddCommentCompontent from './add-comment/AddComment';


class PostCommentsComponent extends Component {

	sortComments = ( comments ) => {
		if( comments !== undefined ) {
			return comments.sort( ( commentA, commentB ) => commentA.voteScore < commentB.voteScore );
		} else {
			return comments;
		}
	}

	render () {
		const { comments } = this.props;
		console.log( comments );
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
				<AddCommentCompontent
					comments={comments}
				/>
			</div>
		)
	}
}

export default PostCommentsComponent;