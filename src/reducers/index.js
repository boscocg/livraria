import { combineReducers } from 'redux';
import { showBooks } from './products';
import { addToCart } from './cart';

const rootReducer = combineReducers({
	books: showBooks,
	cart: addToCart,
});

export default rootReducer;