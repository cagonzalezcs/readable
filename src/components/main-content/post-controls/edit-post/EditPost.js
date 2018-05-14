import React, { Component } from 'react';

class EditPostComponent extends Component {
	render () {
		return (
			<div className="edit-post">
				<div className="edit-post-trigger control-icon-box">
					<div className="controls-tooltip">Edit</div>
					<i className="far fa-edit"></i>
				</div>
			</div>
		)
	}
}

export default EditPostComponent;