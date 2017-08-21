import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

class BtnAddToCart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	increaseIfExistsInCart(book){
		const self = this;
		let totalItemsInCart;
		console.log(self.props.cart.length)

		//testar foreach ----
		//o for com 1 item ta dando treta

		/*if (self.props.cart.length > 0) {
			if (self.props.cart.length == 1) {
				book.number = this.increaseNumbers(book.number);
				this.removeFromCart(i,book);
				this.addToCart(book);
			}
			else {
				for (var i = 0, len = self.props.cart.length; i < len; i++) {
					if (self.props.cart[i].id == book.id) {
						book.number = this.increaseNumbers(book.number);
						this.removeFromCart(i,book);
						this.addToCart(book);
						return;
					}
				}
			}	
		}
		else {
			book.number = 1;
			this.addToCart(book);
		}*/

		return book;
	}

	increaseNumbers(number) {
		if (number == undefined || number == 0)
			number = 2;
		else
			number += 1;

		return number;
	}

	addToCart(book) {
		let cart = this.props.cart;
		cart = cart.push(book)
		this.props.updateCart(cart);
		console.log("add");
	}

	removeFromCart(index,book) {
		let cart = this.props.cart;
		cart = cart.splice(index,1);
		cart = cart.push(book)
		this.props.updateCart(cart);
		console.log("remove");
	}

	render() {
	    return (
	      <a href="#" onClick={() => this.increaseIfExistsInCart(this.props.book)}>Adicionar ao carrinho</a>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list,
	}
}

export default connect(mapStateToProps, { updateCart })(BtnAddToCart)