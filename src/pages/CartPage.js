import React from 'react';
import Cart from '../components/Cart';

export default class CartPage extends React.Component {
	render() {
		return (
			<div>
				<h1>Carrinho</h1>
				<Cart />
			</div>
		)
	}
}