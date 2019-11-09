import axios, { AxiosResponse } from 'axios';
import { BookModel } from '../models';
import { QueryBook } from '../models/query-books.model';
import { Environment } from '../environment/environment';

const config = new Environment()
export default class BookService {

    getBooks = async (payload: QueryBook) => {
        const response: AxiosResponse<BookModel[]> = await axios.post<QueryBook, AxiosResponse<BookModel[]>>(`${config.REACT_APP_GET_BOOKS_URL}`, payload);
        return response.data;
    }

}

