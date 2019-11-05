import React from 'react';
import './App.scss';

import BookList from './components/book-list/book-list';
import Header from './components/header/header';
import Cart from './components/cart/cart';


import queryReducer from './store/books/reducer';
import { authReducer } from './store/auth/reducer';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/private-router';
import cartReducer from './store/cart/reducer';

const reducer = combineReducers({
  query: queryReducer, 
  auth: authReducer,
  cart: cartReducer,
});

const store = createStore(reducer, composeWithDevTools())

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">  
              <BookList/>
            </Route>
            <PrivateRoute exact path="/cart" Component={Cart}/>я
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
