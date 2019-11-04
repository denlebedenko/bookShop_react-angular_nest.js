import React from 'react';
import { Grid } from '@material-ui/core';

interface Props {
    title: string;
    price: number;
}

const CartItem:React.FC<Props> = ({title, price}) => {
    return (
        <div>
            <Grid container direction="row" justify="space-between" className="cart_item">
                <p>{title}</p>
                <p>{price}$</p>
            </Grid>
        </div>
    );
};

export default CartItem;
