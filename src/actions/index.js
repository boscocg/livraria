import axios from 'axios';
export * from './addToCart';

export const SHOW_BOOKS = 'SHOW_BOOKS';

export function showBooks() {
	return (dispatch, getState) => {
		axios.get('http://www.mocky.io/v2/599d2bfe2900005808211264')
			.then((response) => {
				dispatch({ type: SHOW_BOOKS, payload: response.data })
			})
	}
}

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANT_IN_CART = 'INCREASE_QUANT_IN_CART';
export const DECREASE_QUANT_FROM_CART = 'DECREASE_QUANT_FROM_CART';

export function updateCart(book, type) {

	if (type == undefined)
		type = "ADD_TO_CART";

	if (book == undefined)
		book = "";
	else {
		if (book.number == undefined)
			book.number = 1;
	}

	return {
		type: type,
		item: book
	}
}