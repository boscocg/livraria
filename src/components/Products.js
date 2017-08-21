import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks, updateCart } from '../actions';
import IconCart from './IconCart';
import BtnAddToCart from './BtnAddToCart';

class Products extends Component {

	componentWillMount() {
		this.props.showBooks();
		this.props.updateCart();
	}

	renderBooksList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.id}>
					<h3>{book.title}</h3>
					<BtnAddToCart book={book} />
				</li>
			)
		})
	}

	render() {
	    return (
	      <div>
	      	<h1>App Produtos - <IconCart /></h1>
	      	<ul>
				{ this.renderBooksList() }
	      	</ul>
	      </div>
	    );
  	}
}

function mapStateToProps(state) {
	console.log("MONITOR:", state)
	return {
		books: state.books.list,
		cart: state.cart.list,
	}
}

export default connect(mapStateToProps, { showBooks, updateCart })(Products)