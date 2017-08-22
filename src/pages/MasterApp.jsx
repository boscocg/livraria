import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

require('../assets/styles/Mixins.less');
require('../assets/styles/Reset.less');
require('../assets/styles/Common.less');
require('../assets/styles/Main.less');

export default class MasterApp extends Component {
	render() {
	    return (
	      <div className="app">

	      	{/*#### Menu for Accessibility ####*/}
      		<ul id="shortcuts" className="accessibility">
				<li><a href="#gocontent" accesskey="1">Ir para lista de Produtos[1]</a></li>
				<li><a href="#gomenu" accesskey="2">Ir para o menu[2]</a></li>
			</ul>

	      	<header className="app__header">
	      		<div className="app__header__logo">
		      		<Link to="/" title="Ir para página inicial da aplicação">
						<img src={require('../assets/images/logo.svg')} alt="Logo da Aplicação"/>
						<span>Livraria</span>
		      		</Link>
	      		</div>
	      		<div className="app__header__cart">
		      		<Link to="/cart" activeClassName="active" title="Ir para página do carrinho de compras">
						<img src={require('../assets/images/cart.svg')} alt="Carrinho"/>
		      		</Link>
	      		</div>
	      	</header>

	      	<div className="app__main">
				{this.props.children}
	      	</div>

	      	<footer className="app__footer">
	      		<p>Copyright Livraria © - livraria.com.br‎</p>
	      	</footer>

	      </div>
	    );
  	}
}