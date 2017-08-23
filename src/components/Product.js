import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

require('../assets/styles/components/Product.less');

class Product extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	addToCart(book) {		
		this.props.updateCart(book,"ADD_TO_CART");
		this.refresh();
	}

	refresh(){
		let page;
		browserHistory.listen(function(event) { page = event })
	    browserHistory.push(page);
	}

	renderButton(book) {
		for (var i = 0, len = this.props.cart.length; i < len; i++) {
			if (this.props.cart[i].id == book.id)
				return (<a className="btn btn-disabled added">Adicionado</a>)
		}
		return (<a className="btn add" onClick={this.addToCart.bind(this,this.props.book)}>Adicionar ao carrinho</a>)	
	}

	render() {
	    return (
			<div className="product">
				<div className="product__image">
					<img src={this.props.book.image} alt={this.props.book.title} />
				</div>
				<div className="product__title">
					<h2>{this.props.book.title}</h2>
				</div>
				<div className="product__description">
					<p>{this.props.book.description}</p>
				</div>
				<div className="product__price">
					<p>R$ {this.props.book.price.toFixed(2)}</p>
				</div>
				<div className="product__btn">
					{ this.renderButton(this.props.book) }						
				</div>
			</div>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list
	}
}

export default connect(mapStateToProps, { updateCart })(Product)