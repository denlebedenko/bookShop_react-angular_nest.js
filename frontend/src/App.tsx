import React from 'react';
import './App.scss';
import BookList from './components/book-list/book-list';
import Header from './components/header/header';
import { createStore, combineReducers } from 'redux';
import queryReducer from './store/books/reducer';
import { authReducer } from './store/auth/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  query: queryReducer, 
  auth: authReducer,
});

const store = createStore(reducer, composeWithDevTools())

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header/>
        <BookList/>
      </React.Fragment>
    </Provider>
  );
}

export default App;
