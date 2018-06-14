import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import FormSerialize from 'form-serialize';
import moment from 'moment';
// import { updateComment } from '../../../../../actions/CommentActions';
import CommentControlsComponent from './comment-controls/CommentControls';



class SingleCommentComponent extends Component {
	render() {
		const { comment } = this.props;
		return (
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
					/>
				</div>
			</li>
		)
	}
}

export default SingleCommentComponent;