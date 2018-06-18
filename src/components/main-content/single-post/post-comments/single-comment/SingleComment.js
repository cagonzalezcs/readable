import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import moment from 'moment';
import CommentControlsComponent from './comment-controls/CommentControls';
import EditCommentComponent from './edit-comment/EditComment';
import { updateComment } from '../../../../../actions/CommentActions';



class SingleCommentComponent extends Component {

	state = {
		editingComment: false
	}

	cancelCommentEdit = ( event ) => {
		event.preventDefault();
		this.setState({
			editingComment: false
		})
	}

	revealCommentEdit = () => {
		this.setState({
			editingComment: true
		})
	}

	eventCommentUpdate = ( event ) => {
		event.preventDefault();
		const serializedComment = FormSerialize( event.target, { hash: true });
		const updateComment = {
			...this.props.comment,
			...serializedComment
		};
		this.props.updateComment(updateComment).then( data => {
			this.setState({
				editingComment: false
			})
		})
	}

	render() {
		const { comment } = this.props;

		return this.state.editingComment ? (
			<li
				className="comment-edit comment-item"
				key={ comment.id }>
				<EditCommentComponent
					onEditSumbit={ ( event ) => { this.eventCommentUpdate( event ) } }
					onCancelEdit={ this.cancelCommentEdit }
					comment={ comment }
				/>
			</li>
		) : (
			<li
				className="comment-item"
				key={ comment.id }>
				<div className="comment-header">
					<span className="comment-author">{ comment.author }</span>
					<span className="comment-date">{ moment( comment.timestamp ).format('MMMM Do YYYY, h:mm a') }</span>
				</div>
				<p className="comment-body">{ comment.body }</p>
				<div className="comment-controls-wrapper">
					<CommentControlsComponent
						comment={ comment }
						onEditElem={ this.revealCommentEdit }
					/>
				</div>
			</li>
		)
	}
}

export default connect(null, { updateComment })(SingleCommentComponent);