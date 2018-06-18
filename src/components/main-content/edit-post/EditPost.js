import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import { getPost, updatePost } from '../../../actions/PostActions';
import { selectCategory } from '../../../actions/CategoryActions';
import PostFormComponent from '../post-form/PostForm';

class PostEditComponent extends Component {

	componentDidMount() {
		const postId = this.props.match.params.id || false;
		this.props.getPost( postId );
	}

	componentWillReceiveProps( nextProps ) {
		if( nextProps.match.params.id !== this.props.match.params.id ) {
			const postId = nextProps.match.params.id || false;
			this.props.getPost( postId );
		}
	}

	eventPostUpdate = ( event ) => {
		event.preventDefault();
		const serializedPost = FormSerialize( event.target, { hash: true } );
		const post = {
			...this.props.post,
			...serializedPost
		}
		this.props.updatePost( post );
		this.props.history.push(`/${post.category}/${post.id}`);
	}

	render () {
		const { post } = this.props;

		return (
			<div className="post-edit-container">
				<div className="edit-form-wrapper">
					{ post && post.title && (
						<PostFormComponent
							formTitle="Edit Post"
							post={ post }
							onFormSubmit={this.eventPostUpdate} />
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ( { post } ) => ({
	post: post.post ? post.post : post
})

export default connect( mapStateToProps, { getPost, updatePost, selectCategory })(PostEditComponent);