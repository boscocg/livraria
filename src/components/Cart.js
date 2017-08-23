import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions';
import { browserHistory } from 'react-router';

require('../assets/styles/components/Cart.less');

class Cart extends Component {

	componentWillMount() {
		this.props.updateCart();
	}

	refresh(){
		let page;
		browserHistory.listen(function(event) { page = event })
	    browserHistory.push(page);
	}

	increaseItemInCart(book) {
		this.props.updateCart(book,"INCREASE_QUANT_IN_CART");
		this.refresh();
	}

	removeItemFromCart(book) {
		this.props.updateCart(book,"REMOVE_FROM_CART");
		this.refresh();
	}

	decreaseItemFromCart(book) {
		this.props.updateCart(book,"DECREASE_QUANT_FROM_CART");
		this.refresh();
	}

	renderCartList() {
		return this.props.cart.map((item, index) => {
			return (
				<tr key={index}>
					<td>Livro {item.title}</td>
					<td className="quantity">
						<a title="Remover 1" onClick={() => this.decreaseItemFromCart(item)}><img src={require('../assets/images/minus.svg')} alt="Remover 1"/></a>
						<span>{item.number}</span>
						<a title="Adicionar mais 1" onClick={() => this.increaseItemInCart(item)}><img src={require('../assets/images/plus.svg')} alt="Adicionar mais 1"/></a> 
					</td>
					<td className="price">R$ {(item.price * item.number).toFixed(2)}</td>
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
						<th>R$ { this.props.total }</th>
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
		cart: state.cart.list,
		total: state.cart.total
	}
}

export default connect(mapStateToProps, { updateCart })(Cart)