import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePost } from '../../../actions/PostActions';
import VoteControlComponent from './vote-control/VoteControl';
import CommentsCountComponent from './comments-count/CommentsCount';
import EditControlComponent  from './edit-control/EditControl';
import DeleteControlComponent from './delete-control/DeleteControl';

class UserControlsComponent extends Component {

	eventEditPost = () => {
		this.props.history.push( `/edit/${this.props.post.id}` );
	}

	eventDeletePost = () => {
		this.props.deletePost( this.props.post );
		this.props.history.push('/');
	}

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
					<EditControlComponent
						onEditElem = { () => { this.eventEditPost() } }
					/>
				</div>
				<div className="delete-controls">
					<DeleteControlComponent
						onDeleteElem = { () => { this.eventDeletePost() } } />
				</div>
			</div>
		)
	}
}

const mapStateToProps = ( { categories } ) => ( {
	categories
} );

export default withRouter(connect(mapStateToProps, { deletePost })( UserControlsComponent ));