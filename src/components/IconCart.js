import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

class IconCart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	totalItemsInCart() {
		return this.props.cart.length;
	}

	render() {
	    return (
	      <span>{ this.totalItemsInCart() }</span>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list,
	}
}

export default connect(mapStateToProps, { updateCart })(IconCart)