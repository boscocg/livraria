export function calcTotal(list) {
	let total = 0;
	let itemTotal = 0;
	if (list.length == 1) {
		total = parseFloat(list[0].price) * list[0].number;
		return total.toFixed(2);
	}
	else if (list.length > 1) {
		for (var i = 0, len = list.length; i < len; i++) {
			itemTotal = parseFloat(list[i].price) * list[i].number
			total = total + itemTotal;
		}
		return total.toFixed(2);
	}
}

export function addItemInList(newState, action) {
	let equalBooksInCart = 0;
	let indexForRemove = 0;

	for (var i = 0, len = newState.list.length; i < len; i++) {
		if (newState.list[i].id == action.item.id) {
			equalBooksInCart = newState.list[i].number;
			equalBooksInCart += 1;
			indexForRemove = i;
		}
	}

	if (equalBooksInCart == 0)
		action.item.number = 1;

	else if (equalBooksInCart > 0) {
		action.item.number = equalBooksInCart;
		newState.list.splice(indexForRemove,1);
	}

	newState.list.push(action.item);

	return newState;
}

export function removeItemFromCart(newState, action) {
	let indexForRemove = 0;
	for (var i = 0, len = newState.list.length; i < len; i++) {
		if (newState.list[i].id == action.item.id) {
			indexForRemove = i;
		}
	}
	newState.list.splice(indexForRemove,1);

	return newState;
}

export function decreaseItemFromCart(newState, action) {
	let equalBooksInCart = 0;
	let indexForRemove = 0;

	for (var i = 0, len = newState.list.length; i < len; i++) {
		if (newState.list[i].id == action.item.id) {
			equalBooksInCart = newState.list[i].number;
			equalBooksInCart -= 1;
			indexForRemove = i;
		}
	}
	
	if (equalBooksInCart == 0)
		newState.list.splice(indexForRemove, 1);

	else if (equalBooksInCart > 0) {
		action.item.number = equalBooksInCart;
		newState.list.splice(indexForRemove,1);
		newState.list.push(action.item);
	}

	return newState;

}