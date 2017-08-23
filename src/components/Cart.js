import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';

require('../assets/styles/components/Cart.less');

class Cart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	totalValue() {
		if (this.props.cart.length == 1) {
			let total = parseFloat(this.props.cart[0].price);
			return total.toFixed(2);
		}
		else {
			let total = 0;
			for (var i = 0, len = this.props.cart.length; i < len; i++) {
				total = total + parseFloat(this.props.cart[i].price);
			}
			return total.toFixed(2);
		}
	}

	addToCart(book) {
		this.props.updateCart(book,"UPDATE_CART");
	}

	removeItemFromCart(book) {
		this.props.updateCart(book,"REMOVE_FROM_CART");
	}

	decreaseFromCart(book) {
		this.props.updateCart(book,"DECREASE_QUANT_FROM_CART");
	}

	renderCartList() {
		return this.props.cart.map((item) => {
			return (
				<tr>
					<td>{item.title}</td>
					<td className="quantity">
						<a title="Adicionar mais 1" onClick={() => this.addToCart(item)}><img src={require('../assets/images/plus.svg')} alt="Adicionar mais 1"/></a> 
						<span>{item.number}</span>
						<a title="Remover 1" onClick={() => this.decreaseFromCart(item)}><img src={require('../assets/images/minus.svg')} alt="Remover 1"/></a>
					</td>
					<td className="price">R$ {item.price.toFixed(2)}</td>
					<td className="remove"><a onClick={() => this.removeItemFromCart(item)} title="Remover produto"><img src={require('../assets/images/remove.svg')} alt="Remover produto"/></a></td>
				</tr>
			)
		})
	}

	render() {
	    return (
	      <div className={"cart " + (this.props.cart.length > 0 ? 'haveItems' : 'noItems')}>
			<table summary="Produtos no carrinho.">
				<caption>Todos os produtos que foram adicionados</caption>
				<thead>
					<tr>
						<th>Título</th>
						<th>Quantidade</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{ this.renderCartList() }
				</tbody>
				<tfoot>
					<tr>
						<th colSpan="2">Total</th>
						<th>R$ { this.totalValue() }</th>
						<th></th>
					</tr>
				</tfoot>
			</table>
			<div className="message">Nenhum item adicionado</div>
	      </div>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart.list
	}
}

export default connect(mapStateToProps, { updateCart })(Cart)