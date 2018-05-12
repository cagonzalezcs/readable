import React, { Component } from 'react';

class DeletePostComponent extends Component {
	render () {
		return (
			<div className="delete-post">
				<div className="delete-post-trigger control-icon-box">
					<div className="controls-tooltip">Delete</div>
					<i class="fas fa-trash-alt"></i>
				</div>
			</div>
		)
	}
}

export default DeletePostComponent;