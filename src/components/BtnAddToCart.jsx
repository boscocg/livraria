import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

require('../assets/styles/BtnAddToCart.less');

class BtnAddToCart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	addToCart(book) {
		this.props.updateCart(book);
	}

	render() {
	    return (
	      <a href="#" onClick={this.addToCart.bind(this,this.props.book)}>Adicionar ao carrinho</a>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list
	}
}

export default connect(mapStateToProps, { updateCart })(BtnAddToCart)