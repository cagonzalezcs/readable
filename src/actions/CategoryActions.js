import * as ReadableAPI from '../utils/ReadableAPI';

export const STORE_CATEGORIES = 'STORE_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

// Get Categories from API
export const getCategories = () => ( dispatch ) => {
	return ReadableAPI
			.getCategories()
			.then( ( categories ) => dispatch( storeCategories( categories )));
}

// Store Categories
export const storeCategories = ( categories ) => {
	return {
		type: STORE_CATEGORIES,
		categories
	}
}

// Set User Selected Category
export const selectCategory = ( selectedCategory ) => {
	return {
		type: SELECT_CATEGORY,
		selectedCategory
	}
}