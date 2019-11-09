import React from 'react';

import { Container } from '@material-ui/core';

import './cart.scss';

import Cart from './cart';
import { connect } from 'react-redux';
import CartEmpty from './cart-empty';

interface Props {
    cart: string[];
}

const CartWrapper: React.FC<Props> = ({ cart }) => {

    return (
        <div>
            <Container>
                {cart.length > 0 ? <Cart /> : <CartEmpty />}
            </Container>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        cart: state.cart.books,
    };
};


export default connect(mapStateToProps)(CartWrapper);



