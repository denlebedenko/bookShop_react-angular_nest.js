import React from 'react';
import { Grid } from '@material-ui/core';
import TokenStorage from '../../services/token.storage';


interface Props {
    title: string;
    price: number;
    id: string;
}



const CartItem:React.FC<Props> = ({title, price, id}) => {
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
