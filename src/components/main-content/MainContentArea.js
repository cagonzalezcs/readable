import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ListPostsComponent from './list-posts/ListPosts';

class MainContentAreaComponent extends Component {
	render () {
		return (
			<div className="main-content-area">
				<div className="post-list-container">
					<Switch>
						<Route exact path='/' component={ ListPostsComponent } />
					</Switch>
				</div>
			</div>
		)
	}
}

export default withRouter(MainContentAreaComponent);