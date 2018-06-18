import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItemComponent from './post-item/PostItem';
import SortItemsComponent from './sort-items/SortItems';
import { selectCategory } from '../../../actions/CategoryActions';
import { getPosts } from '../../../actions/PostActions';

class ListPostsComponent extends Component {

	state = {
		sortedPosts: []
	}

	componentDidMount() {
		const filter = this.props.match.params.category || false;
		this.props.getPosts( filter );
	}

	componentWillReceiveProps( nextProps ) {
		if( nextProps.match.params.category !== this.props.match.params.category ) {
			const filter = nextProps.match.params.category || false;
			this.props.getPosts( filter );
		}
	}

	sortPosts = ( posts, sort ) => {
		if ( posts !== undefined ) {
			switch ( sort.orderBy ) {
				case 'descVoteScore':
					return posts.sort( ( postA, postB ) => postA.voteScore < postB.voteScore );
				case 'ascVoteScore':
					return posts.sort( ( postA, postB ) => postA.voteScore > postB.voteScore );
				case 'descTimestamp':
					return posts.sort( ( postA, postB ) => postA.timestamp < postB.timestamp );
				case 'ascTimestamp':
					return posts.sort( ( postA, postB ) => postA.timestamp > postB.timestamp );
				default:
					return posts;
			}
		} else {
			return posts;
		}
	}

	render () {
		const { posts } = this.props.posts;
		const { sort } = this.props;
		const sortedPosts = this.sortPosts( posts, sort );
		console.log(sortedPosts);

		return (
			<div className="post-list">
				<div className="post-list-header">
					<div className="post-list-title">
						{ this.props.match.params.category !== undefined
							? <h1> {this.props.match.params.category} Posts</h1>
							: <h1>All Readable Posts</h1>
						}
					</div>
					<div className="item-sorting">
						<SortItemsComponent />
					</div>
				</div>
				{ sortedPosts !== undefined && sortedPosts.length ? sortedPosts.map( post => (
					<PostItemComponent
						post={ post }
						key={ post.id }
					/>
				)):(
					<div className="no-posts-available">
						<p>There are no posts listed in <span className="category">{ this.props.match.params.category }</span></p>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ posts, sort }) => ({
	posts,
	sort
})

export default connect( mapStateToProps, { getPosts, selectCategory } )( ListPostsComponent );