import React from 'react'
import BookService from '../../services/book.service';
import { Container } from '@material-ui/core';
import BookItem from './book-item/book-item';
import { QueryBook } from '../../models/query-books.model';

export default class BookList extends React.Component {


    bookService = new BookService();
    
    payload:QueryBook = {
        page: '1',
        minPrice: '',
        maxPrice: '',
        typeBook: '',
    }

    async getBooksList() {
        const books = this.bookService.getBooks(this.payload)
        .then((res)=> {
            console.log(res)
        })
        return books;
    }

    componentDidMount(){
        this.getBooksList();
    }

    render(){
        return(
            <Container>
                <BookItem/>
            </Container>
        )
    }
    
}