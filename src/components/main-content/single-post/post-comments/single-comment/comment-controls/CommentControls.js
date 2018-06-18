import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../../../../../actions/CommentActions';
import VoteControlComponent from '../../../../user-controls/vote-control/VoteControl';
import EditControlComponent from '../../../../user-controls/edit-control/EditControl';
import DeleteControlComponent from '../../../../user-controls/delete-control/DeleteControl';

class CommentControlsComponent extends Component {
	eventDeleteComment = () => {
		this.props.deleteComment( this.props.comment );
	}
	eventEditComment = () => {
		this.props.onEditElem();
	}

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
						<EditControlComponent
							onEditElem = { () => { this.eventEditComment() } }/>
					</div>
					<div className="delete-controls">
						<DeleteControlComponent
							onDeleteElem = { () => { this.eventDeleteComment() } } />
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null, { deleteComment })( CommentControlsComponent );