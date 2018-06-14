import {
	STORE_CATEGORIES,
	SELECT_CATEGORY
} from '../actions/CategoryActions';

const categories = (state = {}, action) => {
	const { categories, selectedCategory } = action;

	switch (action.type ){
		case STORE_CATEGORIES:
			return {
				...state,
				categories
			};
		case SELECT_CATEGORY:
			return {
				...state,
				selectedCategory
			};
		default:
			return state;
	}
}

export default categories;