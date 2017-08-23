import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANT_IN_CART, DECREASE_QUANT_FROM_CART } from '../actions';
import { addItemInList, calcTotal, removeItemFromCart, decreaseItemFromCart, increaseItemInCart } from './cartFunctions';

const initialState = {
	list: [],
}

export function updateCart(state = initialState, action) {

	let newState = Object.assign({}, state, {total: 0});
	newState.total = calcTotal(newState.list);//Calc price total

	if (localStorage.getItem('newState') != null)
		newState.list = JSON.parse(localStorage.getItem('newState'));

	if (action.item == undefined || action.item == "")
		return Object.assign({}, newState, action)

		
	switch(action.type) {

		case ADD_TO_CART:
			newState = addItemInList(newState, action);//Update Item in list	
			newState.total = calcTotal(newState.list);//Calc price total
			localStorage.setItem("newState", JSON.stringify(newState.list));
			return Object.assign({}, newState, action);

		case REMOVE_FROM_CART:
			newState = removeItemFromCart(newState, action);//Remove Item from list	
			newState.total = calcTotal(newState.list);//Calc price total
			localStorage.setItem("newState", JSON.stringify(newState.list));
			return Object.assign({}, newState, action)

		case INCREASE_QUANT_IN_CART:
			newState = increaseItemInCart(newState, action);//Increase Item number in list	
			newState.total = calcTotal(newState.list);//Calc price total
			localStorage.setItem("newState", JSON.stringify(newState.list));
			return Object.assign({}, newState, action);

		case DECREASE_QUANT_FROM_CART:
			newState = decreaseItemFromCart(newState, action);//Decrease Item number from list	
			newState.total = calcTotal(newState.list);//Calc price total
			localStorage.setItem("newState", JSON.stringify(newState.list));
			return Object.assign({}, newState, action);


		default:
			return state
	}
}
