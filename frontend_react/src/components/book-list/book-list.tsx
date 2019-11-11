import React, { useState, useEffect } from 'react'
import BookService from '../../services/book.service';
import { Container, Grid } from '@material-ui/core';
import BookItem from './book-item/book-item';
import { connect } from 'react-redux';
import { BookModel } from 'models/book/book.model';
import Filter from '../filter/filter';
import { addToCart } from '../../store/cart/action';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { QueryBook } from 'models/filter/query-books.model';
import { AppState } from 'models/state/app-state.model';

const bookService = new BookService();

interface Props {
    query: QueryBook;
    addedBook: typeof addToCart;
}

const BookList: React.FC<Props> = ({query, addedBook}) => {

   const [books, setBookList] = useState<BookModel[]>([]);

    const getBooks = async () => {
        const booklist = await bookService.getBooks(query);
        setBookList(booklist);
        return booklist;
    };

   useEffect(() => {
        getBooks();
    }, [query]);

    const booksList = books.map((book)=> {
        return <BookItem 
                    key={book.id}
                    id={book.id}
                    title={book.title} 
                    price={book.price}
                    genre={book.genre}  
                    description={book.description}
                    coverUrl={book.coverUrl} 
                    type={book.type}
                    addToCart= {() => addedBook(book.id)}
                    /> 
    });

    return(
        <React.Fragment>
            <Grid container direction="row" justify="center" >
                <Grid item>
                    <Filter/>
                </Grid>
                <Grid item>
                    <Container>
                        <Grid container direction="row">
                            {booksList}
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </React.Fragment>
        
    );
};  

const mapStateToProps = (state: AppState) => {
    return {
       query: state.query,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {

    const addedBook = bindActionCreators(addToCart, dispatch)
    return { 
        addedBook
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
