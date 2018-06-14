import React, { Component } from 'react';
import VoteControlComponent from '../../../../user-controls/vote-control/VoteControl';
import EditControlComponent from '../../../../user-controls/edit-control/EditControl';
import DeleteControlComponent from '../../../../user-controls/delete-control/DeleteControl';

class CommentControlsComponent extends Component {
	render () {
		const { comment } = this.props;
		return (
			<div className="comment-controls user-controls">
				<div className="voting-controls">
					<VoteControlComponent
						postElem={ comment }
					/>
				</div>
				<div className="controls-wrapper">
					<div className="edit-controls">
						<EditControlComponent />
					</div>
					<div className="delete-controls">
						<DeleteControlComponent />
					</div>
				</div>
			</div>
		)
	}
}

export default CommentControlsComponent;