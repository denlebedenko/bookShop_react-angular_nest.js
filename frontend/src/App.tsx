import React from 'react';
import './App.scss';
import BookList from './components/book-list/book-list';
import Header from './components/header/header';
import { createStore } from 'redux';
import reducer from './store/books/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer)

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
