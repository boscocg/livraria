import React from 'react';
import { Link } from 'react-router';
import Cart from '../components/Cart.jsx';

export default class CartPage extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<h1>Carrinho</h1>
				<Cart />
			</div>
		)
	}
}