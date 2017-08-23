import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

require('../assets/styles/components/Logo.less');

export default class Logo extends Component {
	render() {
	    return (
      		<Link className="logo" to="/" title="Ir para página inicial da aplicação">
				<img src={require('../assets/images/logo.svg')} alt="Logo da Aplicação"/>
				<span>Livraria</span>
			</Link>
	    );
  	}
}


