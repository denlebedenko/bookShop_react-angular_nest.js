import axios, { AxiosResponse } from 'axios';
import { BookModel } from '../models';

export default class CartService {

    getCartItems = async(payload: string[]) => {
        const response: AxiosResponse<BookModel[]> = await axios.post<string[],AxiosResponse<BookModel[]>>('http://localhost:80/books/cart', payload);
        return response.data;
    }
}

