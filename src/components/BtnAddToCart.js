import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

require('../assets/styles/components/BtnAddToCart.less');

class BtnAddToCart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	addToCart(book) {
		this.props.updateCart(book,"UPDATE_CART");
	}

	verifyInCart(book) {
		if (this.props.cart.length == 1 && this.props.cart[0].id == book.id) {
			if(this.props.cart[0].number > 0)
				return true;
		}
		else {
			for (var i = 0, len = this.props.cart.length; i < len; i++) {
				if (this.props.cart[i].id == book.id) {
					if(this.props.cart[i].number > 0)
						return true;
				}
			}
		}	
	}

	render() {
	    return (
	      	<div className={(this.verifyInCart(this.props.book) ? 'addedInCart' : 'noAddedInCart')}>
		      	<a className="btn add" onClick={this.addToCart.bind(this,this.props.book)}>Adicionar ao carrinho</a>
		    	<a className="btn btn-disabled added">Adicionado</a>
			</div>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list
	}
}

export default connect(mapStateToProps, { updateCart })(BtnAddToCart)