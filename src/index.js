import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import LandingPage from './components/LandingPage';
import Invoices from './components/Invoices';
import store from './store'



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path='/invoices' component={Invoices}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
