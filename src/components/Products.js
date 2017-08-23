import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks, updateCart } from '../actions';
import Product from './Product.js';

require('../assets/styles/components/Products.less');

class Products extends Component {

	componentWillMount() {
		this.props.showBooks();
		this.props.updateCart();
	}

	renderBooksList() {
		return this.props.books.map((book) => {
			return (
				<Product key={book.id} book={book}/>
			)
		})
	}

	render() {
	    return (
	    	<div className="products">
		    	<div className="products__list">
					{ this.renderBooksList() }
		      	</div>
	    	</div>	
	    );
  	}
}

function mapStateToProps(state) {
	return {
		books: state.books.list,
		cart: state.cart.list,
	}
}

export default connect(mapStateToProps, { showBooks, updateCart })(Products)