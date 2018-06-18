import React, { Component } from 'react';

class EditControlComponent extends Component {
	render () {
		const { onEditElem } = this.props;

		return (
			<div className="edit-control">
				<button
					className="edit-item-trigger control-icon-box"
					onClick = { onEditElem }>
					<div className="controls-tooltip">Edit</div>
					<i className="far fa-edit"></i>
				</button>
			</div>
		)
	}
}

export default EditControlComponent;