import axios, { AxiosResponse } from 'axios';
import { BookModel } from '../models';
import { QueryBook } from '../models/query-books.model';
import { Environment } from '../environment/environment';

const config = new Environment()
export default class BookService {

    getBooks = async (payload: QueryBook) => {
        debugger
        const response: AxiosResponse<BookModel[]> = await axios.post<QueryBook, AxiosResponse<BookModel[]>>('http://localhost:80/books', payload);
        console.log(config.REACT_APP_DATABASE)
        return response.data;
    }

    getCartItems = async(payload: string[]) => {
        const response: AxiosResponse<BookModel[]> = await axios.post<string[],AxiosResponse<BookModel[]>>('http://localhost:80/books/cart', payload);
        return response.data;
    }
}

