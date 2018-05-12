import React, { Component } from 'react';
import PostVotingComponent from './post-voting/PostVoting';
import CommentsCountComponent from './comments-count/CommentsCount';
import EditPostComponent  from './edit-post/EditPost';
import DeletePostComponent from './delete-post/DeletePost';

class PostControlsComponent extends Component {
	render () {
		return (
			<div className="post-controls">
				<div className="voting-controls">
					<PostVotingComponent />
				</div>
				<div className="comments-controls">
					<CommentsCountComponent />
				</div>
				<div className="edit-controls">
					<EditPostComponent />
				</div>
				<div className="delete-controls">
					<DeletePostComponent />
				</div>
			</div>
		)
	}
}

export default PostControlsComponent;