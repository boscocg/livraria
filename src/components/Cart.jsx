import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

class Cart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	renderCartList() {
		return this.props.cart.map((item) => {
			return (
				<li key={item.id}>
					<span>{item.title}</span>
					<span> {item.price}</span>
					<span> Quantidade: {item.number}</span>
					<a href="#" onClick={() => this.removeFromCart(book)}> X</a>
				</li>
			)
		})
	}

	render() {
	    return (
	      <div>
	      	<h2>App Carrinho</h2>
	      	<ul>
				{ this.renderCartList() }
	      	</ul>
	      </div>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list,
	}
}

export default connect(mapStateToProps, { updateCart })(Cart)