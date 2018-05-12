import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class FooterComponent extends Component {
	render () {
		return (
			<div className="footer">
				<span className="project-info">
					Udacity React/Redux Project "Readable"
				</span>
				<span className="project-creator">
					Created by Cesar Gonzalez
				</span>
			</div>
		)
	}
}

export default FooterComponent;