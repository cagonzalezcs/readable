import React, { Component } from 'react';

class DeleteControlComponent extends Component {
	render () {
		return (
			<div className="delete-control">
				<div className="delete-item-trigger control-icon-box">
					<div className="controls-tooltip">Delete</div>
					<i className="fas fa-trash-alt"></i>
				</div>
			</div>
		)
	}
}

export default DeleteControlComponent;