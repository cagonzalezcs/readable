import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as commentActions from '../../../../actions/CommentActions';
import { HashLink } from 'react-router-hash-link';

class CommentsCountComponent extends Component {

	componentDidMount() {
		const parentID = this.props.post.id;
		this.props.getComments(parentID);
	}

	commentCount = ( comments ) => {
		return comments !== undefined ? comments.length : 0;
	}

	render () {

		const { comments, post } = this.props;
		const commentCount = this.commentCount( comments[post.id] );

		return (
			<div className="comments-count">
				<HashLink
					to={`/${post.category}/${post.id}/#post-comments`}
					className="comments-count-link control-icon-box">
					<div className="controls-tooltip">View Comments</div>
					<i className="fas fa-comments"></i>
					<span className="comments-number">
						{ commentCount }
					</span>
				</HashLink>
			</div>
		)
	}
}

const mapStateToProps = ({ comments }) => ({
	comments
})

export default connect(mapStateToProps, commentActions )( CommentsCountComponent );