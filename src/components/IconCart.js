import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';
import { Link, IndexLink } from 'react-router';

require('../assets/styles/components/IconCart.less');

class IconCart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	numberItems() {
		if (this.props.cart.length > 0) {
			return (
				<span>{ this.props.cart.length }</span>
			)	
		}
	}

	render() {
	    return (
      		<Link className="icon-cart" to="/cart" activeClassName="active" title="Ir para página do carrinho de compras">
				<img src={require('../assets/images/cart.svg')} alt="Carrinho"/>
	  			{ this.numberItems() }
	  		</Link>
	    );
  	}
  	
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list
	}
}

export default connect(mapStateToProps, { updateCart })(IconCart)