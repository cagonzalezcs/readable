import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSerialize from 'form-serialize';
import uuid from 'uuid';
import { addPost } from '../../../actions/PostActions';
import PostFormComponent from '../post-form/PostForm';

class AddPostComponent extends Component  {

	eventAddPost = ( event ) => {
		event.preventDefault();
		const serializedPost = FormSerialize( event.target, {hash: true} );
		const postId = uuid();
		const post = {
			...serializedPost,
			id: postId
		}
		this.props.addPost( post );
		this.props.history.push(`/`);
	}
	render () {
		return (
			<div className="add-post-container">
				<div className="add-post-wrapper">
					<PostFormComponent
						formTitle="Add New Post"
						onFormSubmit={ this.eventAddPost } />
				</div>
			</div>
		)
	}
}

export default connect( null, { addPost } )( AddPostComponent );