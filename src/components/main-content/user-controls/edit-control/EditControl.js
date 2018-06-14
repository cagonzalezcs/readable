import React, { Component } from 'react';

class EditControlComponent extends Component {
	render () {
		return (
			<div className="edit-control">
				<div className="edit-item-trigger control-icon-box">
					<div className="controls-tooltip">Edit</div>
					<i className="far fa-edit"></i>
				</div>
			</div>
		)
	}
}

export default EditControlComponent;