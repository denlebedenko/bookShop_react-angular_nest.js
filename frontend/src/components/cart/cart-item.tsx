import React from 'react';
import { Grid } from '@material-ui/core';
import TokenStorage from '../../services/token.storage';

const tokenStorage = new TokenStorage();

interface Props {
    title: string;
    price: number;
}

const purchasedItems = JSON.parse(tokenStorage.getBooks());
console.log(purchasedItems);

const CartItem:React.FC<Props> = ({title, price}) => {
    const count = 12;
    return (
        <div>
            <Grid container direction="row" justify="space-between" className="cart_item">
                <p>{title}</p>
                <p>{price}$</p>
                <p>{count}</p>
            </Grid>
        </div>
    );
};

export default CartItem;
