import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks, updateCart } from '../actions';
import BtnAddToCart from './BtnAddToCart.js';

require('../assets/styles/components/Products.less');

class Products extends Component {

	componentWillMount() {
		this.props.showBooks();
		this.props.updateCart();
	}

	renderBooksList() {
		return this.props.books.map((book) => {
			return (
				<div key={book.id} className="products__list__item">
					<div className="products__list__item__image">
						<img src={book.image} alt={book.title} />
					</div>
					<div className="products__list__item__title">
						<h2>{book.title}</h2>
					</div>
					<div className="products__list__item__description">
						<p>{book.description}</p>
					</div>
					<div className="products__list__item__price">
						<p>R$ {book.price.toFixed(2)}</p>
					</div>
					<div className="products__list__item__btn">
						<BtnAddToCart book={book}/>						
					</div>
				</div>
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
	console.log("monitor",state)
	return {
		books: state.books.list,
		cart: state.cart.list
	}
}

export default connect(mapStateToProps, { showBooks, updateCart })(Products)