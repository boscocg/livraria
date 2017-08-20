import axios from 'axios';

export const SHOW_BOOKS = 'SHOW_BOOKS';

export function showBooks() {
	return (dispatch, getState) => {
		axios.get('http://www.mocky.io/v2/599878a70f0000680106f07b')
			.then((response) => {
				dispatch({ type: SHOW_BOOKS, payload: response.data })
			})
	}
}


export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(items) {
	console.log(items)
	return { 
		type: ADD_TO_CART, 
		payload: []
	}
}