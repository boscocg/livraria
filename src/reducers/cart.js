import { ADD_TO_CART } from '../actions';

const initialState = {
	list: [],
}

export function addToCart(state = initialState, action) {
	console.log("Reducer AddToCart:",state, action)
	switch(action.type) {
		case ADD_TO_CART:
			return Object.assign({}, state, {list: state.list})
		default:
			return state
	}
}