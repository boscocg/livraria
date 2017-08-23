import React from 'react';
import Products from '../components/Products.js';

export default class Home extends React.Component {
	render() {
		return (
			<div className="page page-product">
		      	<div className="page__header-bar">
			      	<h1 className="page__header-bar__title">Lista de Produtos</h1>
		      	</div>
		      	<div className="page__content">
			      	<Products />
		      	</div>
	      	</div>     	
		)
	}
}