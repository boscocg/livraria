import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks, updateCart } from '../actions';
import IconCart from './IconCart.jsx';
import BtnAddToCart from './BtnAddToCart.jsx';

class Products extends Component {

	componentWillMount() {
		this.props.showBooks();
		this.props.updateCart();
	}

	verifyItemIfExists(book) {
		if (this.props.cart.length == 1 && this.props.cart[0].id == book.id) {
			if(this.props.cart[0].number > 0)
				return true;
		}
		else {
			for (var i = 0, len = this.props.cart.length; i < len; i++) {
				if (this.props.cart[i].id == book.id) {
					if(this.props.cart[i].number > 0)
						return true;
				}
			}
		}	
	}

	renderBooksList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.id} className={this.verifyItemIfExists(book) ? 'inCart' : 'outCart'}>
					<h3>{book.title}</h3>
					<BtnAddToCart book={book} />
				</li>
			)
		})
	}

	render() {
	    return (
	      <div>
	      	<h1>App Produtos - {this.props.cart.length}</h1>
	      	<ul>
				{ this.renderBooksList() }
	      	</ul>
	      </div>
	    );
  	}
}

function mapStateToProps(state) {
	console.log("monitor prod",state)
	return {
		books: state.books.list,
		cart: state.cart.list,
	}
}

export default connect(mapStateToProps, { showBooks, updateCart })(Products)