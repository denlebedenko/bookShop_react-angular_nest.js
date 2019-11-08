import React, {useState, useEffect} from 'react'
import BookService from '../../services/book.service';
import { Container, Grid } from '@material-ui/core';
import BookItem from './book-item/book-item';
import { connect } from 'react-redux';
import { BookModel } from 'models/book.model';
import Filter from '../filter/filter';
import { addToCart } from '../../store/cart/action';
import { bindActionCreators } from 'redux';

const bookService = new BookService();
const BookList: React.FC = ({query, addedBook}:any) => {

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
                    authors={book.authors} 
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

const mapStateToProps = (state:any) => {
    return {
       query: state.query,
    };
};

const mapDispatchToProps = (dispatch:any) => {
    const addedBook = bindActionCreators(addToCart, dispatch)
    return { 
        addedBook
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
