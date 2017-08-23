import { UPDATE_CART } from '../actions';

const initialState = {
	list: [],
}

export function updateCart(state = initialState, action) {

	const oldState = state;
	console.log("oldState",oldState.list)

	if (action.list == undefined)
		action.list = []

	if (action.item == undefined)
		action.item = ""

	if (action.item != "") {

		if (action.item.number == undefined)
			action.item.number = 1;

		if (state.list.length > 0) {
			if (state.list.length == 1 && state.list[0].id != action.item.id) {
				action.item.number = 1;
				state.list.push(action.item);
			}
			else {
				let equalBooksInCart = 0;
				let indexForRemove = 0;
				for (var i = 0, len = state.list.length; i < len; i++) {
					if (state.list[i].id == action.item.id) {
						equalBooksInCart = state.list[i].number;
						equalBooksInCart += 1;
						indexForRemove = i;
					}
				}
				if (equalBooksInCart == 0) {
					action.item.number = 1;
					state.list.push(action.item);
				}
				else if (equalBooksInCart > 0) {
					action.item.number = equalBooksInCart;
					state.list.splice(indexForRemove,1);
					state.list.push(action.item);
				}
			}	
		}
		else {
			state.list.push(action.item);
		}
	}

	switch(action.type) {
		case UPDATE_CART:
			return Object.assign({}, oldState, state.list)
		default:
			return state
	}

}