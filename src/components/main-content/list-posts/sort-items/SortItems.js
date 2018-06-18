import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSort } from '../../../../actions/SortActions';

class SortItemsComponent extends Component {

	componentDidMount() {
		this.props.setSort( 'descTimestamp' )
	}

	changePostSorting = ( event ) => {
		this.props.setSort( event.target.value );
	}

	render() {

		return (
			<div className="item-sorting-controls">
				<label className="item-sorting-label" htmlFor="postSortingSelector">Sort By</label>
				<select
					name="item-sorting-selector"
					id="postSortingSelector"
					className="item-sorting-selector"
					defaultValue="descTimestamp"
					onChange={ this.changePostSorting }>
					<option value="descVoteScore">Highest Vote</option>
					<option value="ascVoteScore">Lowest Vote</option>
					<option value="descTimestamp">Latest Posts</option>
					<option value="ascTimestamp">Oldest Posts</option>
				</select>
			</div>
		)

	}
}

export default connect( null, { setSort } )( SortItemsComponent );