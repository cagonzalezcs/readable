import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { deletePost, storePost } from '../../../actions/PostActions';
import VoteControlComponent from './vote-control/VoteControl';
import CommentsCountComponent from './comments-count/CommentsCount';
import EditControlComponent  from './edit-control/EditControl';
import DeleteControlComponent from './delete-control/DeleteControl';

class UserControlsComponent extends Component {
	render () {

		const { post } = this.props;

		return (
			<div className="user-controls">
				<div className="voting-controls">
					<VoteControlComponent
						postElem={ post }
					/>
				</div>
				<div className="comments-controls">
					<CommentsCountComponent
						post={post}
					/>
				</div>
				<div className="edit-controls">
					<EditControlComponent />
				</div>
				<div className="delete-controls">
					<DeleteControlComponent />
				</div>
			</div>
		)
	}
}

export default UserControlsComponent;