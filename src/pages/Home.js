import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks } from '../actions';
import { Link, IndexLink } from 'react-router';
import Products from '../components/Products';

export default class Home extends React.Component {
	render() {
		return (
	      	<Products />
		)
	}
}

