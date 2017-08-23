import { TESTE_CART } from '../actions';

const initialState = {
	list: []
}

export function testeCart(state = initialState, action) {
	
	switch(action.type) {
		case TESTE_CART:
			return Object.assign({}, state, {list: action.payload})
		default:
			return state
	}
	
}