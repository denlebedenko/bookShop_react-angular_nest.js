import axios, { AxiosResponse } from 'axios';
import { CartResponse } from '../models/cart-res.model';

export default class CartService {

    getCartItems = async(payload: string[]) => {
        const response: AxiosResponse<CartResponse> = await axios.post<string[],AxiosResponse<CartResponse>>('http://localhost:80/books/cart', payload);
        return response.data;
    };
};

