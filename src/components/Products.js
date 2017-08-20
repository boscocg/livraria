import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks, addToCart } from '../actions';

class Products extends Component {
	constructor(props) {
	    super(props);
	}

	componentWillMount() {
		this.props.showBooks();
		this.props.addToCart();
	}

	renderBooksList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.id}>
					<h3>{book.title}</h3>
					<a href="#" onClick={() => this.addToCart(book)}>Adicionar ao carrinho</a>
				</li>
			)
		})
	}

	addToCart(book) {
		let cart = this.props.cart;
		cart = cart.push(book)
		this.props.addToCart(cart);
	}

	render() {
	    return (
	      <div>
	      	<h1>App Produtos</h1>
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

export default connect(mapStateToProps, { showBooks, addToCart })(Products)