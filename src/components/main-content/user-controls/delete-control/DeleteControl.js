import React, { Component } from 'react';

class DeleteControlComponent extends Component {
	render () {
		const { onDeleteElem } = this.props;
		return (
			<div className="delete-control">
				<button
					className="delete-item-trigger control-icon-box"
					onClick = { onDeleteElem }>
					<div className="controls-tooltip">Delete</div>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		)
	}
}

export default DeleteControlComponent;