import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVoteScore } from '../../../../actions/VoteActions';

class VoteControlComponent extends Component {

	userVote = ( postElem, option ) => {
		const type = postElem.hasOwnProperty( 'parentId' ) ? 'comments' : 'posts';
		this.props.updateVoteScore( postElem.id, option, type );
	}

	render () {
		const { postElem, vote } = this.props;
		let elemScore = ( vote[ postElem.id ] === undefined ) ? postElem.voteScore : vote[ postElem.id ];

		return (
			<div className="vote-control">
				<div className="voting-triggers">
					<button
						className="vote-up-trigger"
						onClick = {
							() => {
								this.userVote( postElem, 'upVote' )
							}
						}>
						<i className="fas fa-thumbs-up"></i>
					</button>
					<span className="vote-number">{ elemScore }</span>
					<button
						className="vote-down-trigger"
						onClick = {
							() => {
								this.userVote( postElem, 'downVote' )
							}
						}>
						<i className="fas fa-thumbs-down"></i>
					</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ( { vote }, ownProps ) => ({
	vote
})

export default connect(mapStateToProps, { updateVoteScore })(VoteControlComponent);
