import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostItemComponent from './post-item/PostItem';
import SortItemsComponent from './sort-items/SortItems';

import { selectCategory } from '../../../actions/CategoryActions';
import { getPosts } from '../../../actions/PostActions';
import { setSort } from '../../../actions/SortActions';

class ListPostsComponent extends Component {
	componentDidMount() {
		const filter = this.props.match.params.category || false;
		this.props.getPosts( filter );
		// this.props.setSort('descTimestamp');
	}

	componentWillReceiveProps( nextProps ) {
		if( nextProps.match.params.category !== this.props.match.params.category ) {
			const filter = nextProps.match.params.category || false;
			this.props.getPosts( filter );
		}
	}

	render () {
		console.log(this.props.posts)
		return (
			<div className="post-list">
				<div className="post-list-header">
					<div className="post-list-title">
						<h1>All Readable Posts</h1>
					</div>
					<div className="item-sorting">
						<SortItemsComponent
							orderBy={ 'descTimestamp' }
						/>
					</div>
				</div>
				<PostItemComponent />
			</div>
		)
	}
}

const mapStateToProps = ({ posts, sort }) => ({
	posts,
	sort
})

export default connect( mapStateToProps, { getPosts, selectCategory, setSort } )( ListPostsComponent );