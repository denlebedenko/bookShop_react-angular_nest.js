import axios, { AxiosResponse } from 'axios';

import { CartResponse } from '../models/cart-res.model';
import { Environment } from '../environment/environment';


const config = new Environment();
export default class CartService {
    
    getCartItems = async(payload: string[]) => {
        const response: AxiosResponse<CartResponse> = await axios.post<string[],AxiosResponse<CartResponse>>(`${config.REACT_APP_GET_CART_ITEMS}`, payload);
        return response.data;
    }
};

