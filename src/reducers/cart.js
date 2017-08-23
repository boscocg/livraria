import { UPDATE_CART } from '../actions';
import { REMOVE_FROM_CART } from '../actions';
import { DECREASE_QUANT_FROM_CART } from '../actions';
import { addItemInList, calcTotal, removeItemFromCart, decreaseItemFromCart } from './cartFunctions';

const initialState = {
	list: [],
}

export function updateCart(state = initialState, action) {

	let newState = Object.assign({}, state, {total: 0});

	if (action.item == undefined || action.item == "")
		return Object.assign({}, newState, action)
		

	switch(action.type) {

		case UPDATE_CART:
			newState = addItemInList(newState, action);//Update Item in list	
			newState.total = calcTotal(newState.list);//Calc price total
			return Object.assign({}, newState, action);

		case REMOVE_FROM_CART:
			newState = removeItemFromCart(newState, action);//Remove Item from list	
			newState.total = calcTotal(newState.list);//Calc price total
			return Object.assign({}, newState, action)

		case DECREASE_QUANT_FROM_CART:
			newState = decreaseItemFromCart(newState, action);//Decrease Item number from list	
			newState.total = calcTotal(newState.list);//Calc price total
			return Object.assign({}, newState, action);


		default:
			return state
	}
}
