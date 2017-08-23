export function calcTotal(list) {
	let total = 0;
	for (var i = 0, len = list.length; i < len; i++) {
		total += (parseFloat(list[i].price) * list[i].number);
	}
	return total.toFixed(2);
}

export function addItemInList(newState, action) {
	action.item.number = 1;
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

export function increaseItemInCart(newState, action) {
	for (var i = 0, len = newState.list.length; i < len; i++) {
		if (newState.list[i].id == action.item.id) {
			newState.list[i].number++;
		}
	}
	
	return newState;
}


export function decreaseItemFromCart(newState, action) {
	let index = 0;

	for (var i = 0, len = newState.list.length; i < len; i++) {
		if (newState.list[i].id == action.item.id) {
			newState.list[i].number--;
			index = i;
		}
	}
	if (newState.list[index].number == 0)
		newState.list.splice(index, 1);

	return newState;
}