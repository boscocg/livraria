import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks, updateCart } from '../actions';
import IconCart from './IconCart';
import BtnAddToCart from './BtnAddToCart';

class Products extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
			cart: this.props.cart
	    };
  	}

	componentWillMount() {
		this.props.showBooks();
		this.props.updateCart();
	}

	componentDidUpdate() {
		console.log("componentDidUpdate")
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
	      	<h1>App Produtos - <IconCart totalItems={this.state.cart.length} /></h1>
	      	<ul>
				{ this.renderBooksList() }
	      	</ul>
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