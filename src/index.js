import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';

import reducers from './reducers';
import thunk from 'redux-thunk'

import MasterApp from './pages/MasterApp.js';
import Home from './pages/Home.js';
import CartPage from './pages/CartPage.js';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
    	<Route path="/" component={MasterApp}>
    		<IndexRoute component={Home} />
    		<Route path="/cart" component={CartPage} />
    	</Route>
    </Router>  	
  </Provider>
  , document.querySelector('.container'));
