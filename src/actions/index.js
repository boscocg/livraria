import axios from 'axios';

export const SHOW_BOOKS = 'SHOW_BOOKS';

export function showBooks() {
	return (dispatch, getState) => {
		axios.get('http://www.mocky.io/v2/599d2bfe2900005808211264')
			.then((response) => {
				dispatch({ type: SHOW_BOOKS, payload: response.data })
			})
	}
}


export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREASE_QUANT_FROM_CART = 'DECREASE_QUANT_FROM_CART';

export function updateCart(book,type) {

	if (type == undefined)
		type = "UPDATE_CART";

	if (book == undefined)
		book = "";

	return { 
		type: type,
		item: book
	}
}


export const TESTE_CART = 'TESTE_CART';

export function testeCart(list) {

	if (list == undefined)
		list = {};

	return (dispatch, getState) => {
		dispatch({ type: TESTE_CART, payload: list })
	}
}