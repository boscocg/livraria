import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

class IconCart extends Component {

	constructor(props) {
	    super(props);
  	}

	componentWillMount() {
		this.props.updateCart();
	}

	render() {
	    return (
	      <span>{ this.props.cart.length }</span>
	    );
  	}
  	
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list,
	}
}

export default connect(mapStateToProps, { updateCart })(IconCart)