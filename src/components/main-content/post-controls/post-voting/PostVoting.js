import React, { Component } from 'react';

class PostVotingComponent extends Component {
	render () {
		return (
			<div className="post-voting">
				<div className="voting-triggers">
					<span className="vote-up-trigger">
						<i className="fas fa-thumbs-up"></i>
					</span>
					<span className="vote-number">
						10
					</span>
					<span className="vote-down-trigger">
						<i className="fas fa-thumbs-down"></i>
					</span>
				</div>
			</div>
		)
	}
}

export default PostVotingComponent;