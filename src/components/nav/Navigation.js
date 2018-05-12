import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavigationComponent extends Component {
	render () {
		return (
			<div className="navigation">
				<Link
					to='/'
					className='app-title'
					alt='Readable'>
					<span>Readable</span>
				</Link>
				<div className='nav-links'>
					<Link
						to='/'
						className='home-link'
						alt='Readable'>
						<i class="fas fa-home"></i>
						<span className="home-label">
							Home
						</span>
					</Link>
					<ul className='category-list'>
						<li className='category-item'>
							<span className="category-link">
								<i className="fab fa-react"></i>
								<span className="category-name">
									React
								</span>
							</span>
						</li>
						<li className='category-item'>
							<span className="category-link">
								<i className="fab fa-connectdevelop"></i>
								<span className="category-name">
									Redux
								</span>
							</span>
						</li>
						<li className='category-item'>
							<span className="category-link">
								<i className="fas fa-graduation-cap"></i>
								<span className="category-name">
									Udacity
								</span>
							</span>
						</li>
					</ul>
				</div>
				<div className="menu-collapse">
					<span className="menu-collapse-toggle">
						<i className="fas fa-angle-double-left"></i>
						Hide Menu
					</span>
				</div>
				<div className="new-post">
					<span className="new-post-link">
						<div className="new-post-tooltip">Add New Post</div>
						<i className="fas fa-plus"></i>
					</span>
				</div>
			</div>
		)
	}
}

export default NavigationComponent;