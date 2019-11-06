import React from 'react';

import { Container } from '@material-ui/core';
import './cart.scss';

import Cart from './cart';
import { connect } from 'react-redux';

const CartWrapper: React.FC = ({cart}: any) => {

    return (
        <div>
            <Container>
                {cart.length > 0 ? <Cart/> : <h2>Коризна пуста</h2>}
            </Container>
        </div>
    );
};

const mapStateToProps = (state:any) => {
    return {
        cart: state.cart.books,
    };
};


export default connect(mapStateToProps)(CartWrapper);



