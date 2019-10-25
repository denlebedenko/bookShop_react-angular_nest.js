import React from 'react';
import './App.scss';
import BookList from './components/book-list/book-list';
import Header from './components/header/header';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <BookList/>
    </React.Fragment>
      
  );
}

export default App;
