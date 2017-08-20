import { SHOW_BOOKS } from '../actions';

const initialState = {
	list: []
}

export function showBooks(state = initialState, action) {
	
	switch(action.type) {
		case SHOW_BOOKS:
			return Object.assign({}, state, {list: action.payload})
		default:
			return state
	}
	
}