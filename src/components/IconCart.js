import React, { Component } from 'react';

export default class IconCart extends Component {

	render() {
	    return (
	      <span>{ this.props.totalItems }</span>
	    );
  	}
  	
}