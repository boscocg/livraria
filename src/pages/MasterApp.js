import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class MasterApp extends Component {
	render() {
	    return (
	      <div className="all">
			<ul>
				<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
				<li><Link to="/cart" activeClassName="active">Carrinho</Link></li>
			</ul>
			
			<div className="content">
				{this.props.children}
			</div>

	      </div>
	    );
  	}
}