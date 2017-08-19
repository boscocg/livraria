import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBooks } from '../actions'

class App extends Component {

	componentWillMount() {
		this.props.showBooks()
	}

	renderBooksList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.id}>{book.title}</li>
			)
		})
	}

	render() {
	    return (
	      <div>
	      	<h2>Firs commit with get books</h2>
	      	<ul>
				{ this.renderBooksList() }
	      	</ul>
	      </div>
	    );
  	}
}

function mapStateToProps(state) {
	return {
		books: state.book.list
	}
}

export default connect(mapStateToProps, { showBooks })(App)