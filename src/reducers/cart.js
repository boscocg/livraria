import { UPDATE_CART } from '../actions';
import { REMOVE_FROM_CART } from '../actions';
import { DECREASE_QUANT_FROM_CART } from '../actions';

const initialState = {
	list: [],
}

export function updateCart(state = initialState, action) {

	const newState = Object.assign({}, state);

	if (action.item == undefined)
		action.item = ""

	switch(action.type) {

		case UPDATE_CART:
			if (action.item != "") {
				
				if (action.item.number == undefined)
					action.item.number = 1;

				if (newState.list.length > 0) {
					if (newState.list.length == 1 && newState.list[0].id != action.item.id) {
						action.item.number = 1;
						newState.list.push(action.item);
					}
					else {
						let equalBooksInCart = 0;
						let indexForRemove = 0;
						for (var i = 0, len = newState.list.length; i < len; i++) {
							if (newState.list[i].id == action.item.id) {
								equalBooksInCart = newState.list[i].number;
								equalBooksInCart += 1;
								indexForRemove = i;
							}
						}
						if (equalBooksInCart == 0) {
							action.item.number = 1;
							newState.list.push(action.item);
						}
						else if (equalBooksInCart > 0) {
							action.item.number = equalBooksInCart;
							newState.list.splice(indexForRemove,1);
							newState.list.push(action.item);
						}
					}	
				}
				else {
					newState.list.push(action.item);
				}
			}
			return Object.assign({}, state, newState);


		case REMOVE_FROM_CART:
			if (action.item != "") {
				if (state.list.length > 0) {
					if (state.list.length == 1) {
						if (state.list[0].id == action.item.id)
							state.list.splice(0, 1);
					}
					else {
						let indexForRemove = 0;
						for (var i = 0, len = state.list.length; i < len; i++) {
							if (state.list[i].id == action.item.id) {
								indexForRemove = i;
							}
						}
						state.list.splice(indexForRemove,1);
					}	
				}
			}
			return Object.assign({}, newState, action)


		case DECREASE_QUANT_FROM_CART:
			if (action.item != "") {

				if (action.item.number == undefined)
					action.item.number = 0;
				
				if (state.list.length > 0) {
					if (state.list.length == 1 && state.list[0].id == action.item.id && state.list[0].number == 1) {
						state.list.splice(0, 1);
					}
					else {
						let equalBooksInCart = 0;
						let indexForRemove = 0;
						for (var i = 0, len = state.list.length; i < len; i++) {
							if (state.list[i].id == action.item.id) {
								equalBooksInCart = state.list[i].number;
								equalBooksInCart -= 1;
								indexForRemove = i;
							}
						}
						if (equalBooksInCart == 0) {
							state.list.splice(indexForRemove, 1);
						}
						else if (equalBooksInCart > 0) {
							action.item.number = equalBooksInCart;
							state.list.splice(indexForRemove,1);
							state.list.push(action.item);
						}
					}	
				}
			}
			return Object.assign({}, newState, action);


		default:
			return state
	}
}
