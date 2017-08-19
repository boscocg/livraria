import { combineReducers } from 'redux';
import { showBooks } from './books'

const rootReducer = combineReducers({
	book: showBooks
});

export default rootReducer;
