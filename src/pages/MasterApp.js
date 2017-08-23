import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import IconCart from '../components/IconCart.js';
import Logo from '../components/Logo.js';

require('../assets/styles/common/Mixins.less');
require('../assets/styles/common/Reset.less');
require('../assets/styles/common/Common.less');
require('../assets/styles/common/Main.less');

export default class MasterApp extends Component {
	render() {
	    return (
	      <div className="app">

	      	{/*#### Menu for Accessibility ####*/}
      		<ul id="shortcuts" className="accessibility">
				<li><a href="#gocontent">Ir para lista de Produtos[1]</a></li>
				<li><Link to="/cart">Ir para o carrinho[2]</Link></li>
			</ul>

	      	<header className="app__header">
	      		<div className="app__header__left">
	      			{/*#### Logo ####*/}
		      		<Logo />
	      		</div>
	      		<div className="app__header__right">
	      			{/*#### Icone do Carrinho ####*/}
	      			<IconCart />
	      		</div>
	      	</header>

	      	{/*#### Main Content ####*/}
	      	<div className="app__main" id="gocontent">
				{this.props.children}
	      	</div>

	      	<footer className="app__footer">
	      		<p>Copyright Livraria © - livraria.com.br‎</p>
	      	</footer>

	      </div>
	    );
  	}
}