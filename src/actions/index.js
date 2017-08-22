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


export const UPDATE_CART = 'UPDATE_CART';
export function updateCart(book) {
	if (book == undefined) {
		return { 
			type: UPDATE_CART,
			item: ""
		}
	}
	else {
		return { 
			type: UPDATE_CART,
			item: book
		}
	}

}