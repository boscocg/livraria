import axios from 'axios';

export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(book) {

	if (!book)
		book = "";
	else if (!book.number)
        book.number = 1;

	return {
		type: ADD_TO_CART,
		item: book
	}
}
