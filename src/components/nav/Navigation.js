import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, selectCategory } from '../../actions/CategoryActions';


class NavigationComponent extends Component {
	componentDidMount() {
		this.props.getCategories();

	}
	getIcon = ( categoryName ) => {
		switch( categoryName ) {
			case 'react':
				return <span className="fab fa-react"></span>;
			case 'redux':
				return <span className="fab fa-connectdevelop"></span>;
			case 'udacity':
				return <span className="fas fa-graduation-cap"></span>;
			default:
				return <span className="fas fa-question"></span>;
		}
	}
	render () {
		const { categories } = this.props.categories;
		const currentRoute = this.props.match.params.category;

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
						className={ 'home-link' + ( currentRoute === undefined ? ' active-item' : '' ) }
						alt='Readable'>
						<i className="fas fa-home"></i>
						<span className="home-label">
							Home
						</span>
					</Link>
					<ul className='category-list'>

						{ categories && categories.map( ( category ) => (
							<li
								key={ category.path }
								className={ 'category-item' + ( currentRoute === category.path ? ' active-item' : '' ) }>
								<Link
									className="category-link"
									to={`/${category.path}`}>
									{ this.getIcon( category.name ) }
									<span className="category-name">
										{ category.name }
									</span>
								</Link>
							</li>
						))}
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

const mapStateToProps = ({ categories, selectedCategory }) => ({
	categories,
	selectedCategory
})

export default connect( mapStateToProps, { getCategories, selectCategory } )( NavigationComponent );