import React, { useEffect } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import TokenStorage from '../../services/token.storage';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { addToCart } from 'store/cart/action';
const tokenStorage = new TokenStorage();

interface Props {
    title: string;
    price: number;
    id: string | undefined;
    addedBook: typeof addToCart;
    removedBookFromCart: Function;
    getTotalPrice: Function;
}

const bookCountLength = (id: string | undefined) => {
    const bookList: Array<String> = JSON.parse(tokenStorage.getBooks()) || [];
    const countBooksChoice = bookList.filter(book => book === id);
    return countBooksChoice.length;
}

const CartItem: React.FC<Props> = ({ title, price, id, addedBook, removedBookFromCart, getTotalPrice }) => {

    const amount: number = bookCountLength(id);
    const priceTotal: number = price * amount;


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('request')
            getTotalPrice();
        }, 150);
        return () => clearTimeout(timeoutId)
    }, [amount]);



    return (
        <div>
            <Grid container direction="row" justify="space-between" className="cart_item">
                <p className="book_title">{title}</p>
                <Grid item className="categories">
                    <Grid container direction="row" justify="space-between">
                        <p className="amount">{amount}</p>
                        <p className="price">{price}$</p>
                        <p className="price_total_count">{priceTotal}$</p>
                    </Grid>
                </Grid>
                <Grid>
                    <IconButton aria-label="delete" onClick={() => { addedBook(id) }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => { removedBookFromCart(id) }}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default CartItem;
