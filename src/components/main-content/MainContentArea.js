import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ListPostsComponent from './list-posts/ListPosts';
import SinglePostComponent from './single-post/SinglePost';
import EditPostComponent from './edit-post/EditPost';
import AddPostComponent from './add-post/AddPost';

class MainContentAreaComponent extends Component {
	render () {
		return (
			<div className="main-content-area">
				<div className="post-list-container">
					<Switch>
						<Route exact path='/' component={ ListPostsComponent } />
						<Route exact path='/new' component={ AddPostComponent } />
						<Route exact path='/edit/:id' component={ EditPostComponent } />
						<Route exact path='/:category' component={ ListPostsComponent } />
						<Route exact path='/:category/:id' component={ SinglePostComponent } />
					</Switch>
				</div>
			</div>
		)
	}
}

export default withRouter(MainContentAreaComponent);