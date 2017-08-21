import { UPDATE_CART } from '../actions';

const initialState = {
	list: [],
}

export function updateCart(state = initialState, action) {
	switch(action.type) {
		case UPDATE_CART:
			return Object.assign({}, state, {list: state.list})
		default:
			return state
	}
}