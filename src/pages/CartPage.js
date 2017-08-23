import React from 'react';
import { Link } from 'react-router';
import Cart from '../components/Cart.js';

export default class CartPage extends React.Component {
	render() {
		return (
			<div className="page page-cart">
		      	<div className="page__header-bar">
		      		<Link className="page__header-bar__back-icon" to="/" title="Voltar para página de produtos">
		      			<img src={require('../assets/images/back.svg')} alt="Voltar para página de produtos"/>
		      			<span>Voltar</span>
	      			</Link>
			      	<h1 className="page__header-bar__title">Carrinho</h1>
		      	</div>
		      	<div className="page__content">
					<Cart />
		      	</div>
	      	</div> 
		)
	}
}