import React, { Component } from 'react';

class CommentsCountComponent extends Component {
	render () {
		return (
			<div className="comments-count">
				<span className="comments-count-link control-icon-box">
					<div className="controls-tooltip">View Comments</div>
					<i class="fas fa-comments"></i>
					<span class="comments-number">
						3
					</span>
				</span>
			</div>
		)
	}
}

export default CommentsCountComponent;