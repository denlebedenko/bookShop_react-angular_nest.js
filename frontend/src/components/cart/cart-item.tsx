import React from 'react';
import { Grid } from '@material-ui/core';
import { BookModel } from '../../models';
import TokenStorage from '../../services/token.storage';

const tokenStorage = new TokenStorage();

interface Props {
    title: string;
    price: number;
    _id: any;
    amount: number;
}  
const  bookCountLength = (_id: any) => {
    const bookList: Array<BookModel> = JSON.parse(tokenStorage.getBooks()) || [];
    const countBooksChoice = bookList.filter(book => book === _id).length;
    return countBooksChoice;
  }

const CartItem:React.FC<Props> = ({title, price, _id}) => {

    const amount = bookCountLength(_id);
    const priceTotal = price * amount;

    return (
        <div>
            <Grid container direction="row" justify="space-between" className="cart_item">
                <p>{title}</p>
                <Grid item className="categories">
                    <Grid container direction="row" justify="space-between">
                        <p className="amount">{amount}</p>  
                        <p className="price">{price}$</p>
                        <p className="price_total_count">{priceTotal}$</p>
                    </Grid>
                 </Grid>
            </Grid>
        </div>
    );
};

export default CartItem;
