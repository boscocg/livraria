import { combineReducers } from 'redux';
import { showBooks } from './products';
import { updateCart } from './cart';

const rootReducer = combineReducers({
	books: showBooks,
	cart: updateCart,
});

export default rootReducer;