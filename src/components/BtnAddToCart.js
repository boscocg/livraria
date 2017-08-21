import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

class BtnAddToCart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cart: this.props.cart
		};
	}

	componentWillMount() {
		this.props.updateCart();
	}

	cartCtrl(book){
		const self = this;
		let totalItemsInCart;

		if (book.number == undefined) {
			book.number = 1;
		}

		if (self.props.cart.length > 0) {
			if (self.props.cart.length == 1 && self.props.cart[0].id != book.id) {
				book.number = 1;
				this.addToCart(book);
			}
			else {
				let equalBooksInCart = 0;
				let indexForRemove = 0;
				for (var i = 0, len = self.props.cart.length; i < len; i++) {
					if (self.props.cart[i].id == book.id) {
						equalBooksInCart = self.props.cart[i].number;
						equalBooksInCart += 1;
						indexForRemove = i;
					}
				}
				if (equalBooksInCart == 0) {
					book.number = 1;
					this.addToCart(book);
				}
				else if (equalBooksInCart > 0) {
					book.number = equalBooksInCart;
					this.removeFromCart(indexForRemove,book);
					this.addToCart(book);
				}
			}	
		}
		else {
			this.addToCart(book);
		}

	}

	addToCart(book) {
		//this.props.cart.push(book);
		let cart = this.props.cart;
		cart = cart.push(book);
		this.props.updateCart(cart);
	}

	removeFromCart(index,book) {
		//this.props.cart.splice(index,1);
		let cart = this.props.cart;
		cart = cart.splice(index,1);
		this.props.updateCart(cart);
	}

	render() {
	    return (
	      <a href="#" onClick={() => this.cartCtrl(this.props.book)}>Adicionar ao carrinho</a>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list
	}
}

export default connect(mapStateToProps, { updateCart })(BtnAddToCart)