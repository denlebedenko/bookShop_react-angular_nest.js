import React, { useState, useEffect } from 'react';
import { BookModel } from '../../models';
import CartService from '../../services/cart.service';
import CartItem from './cart-item';
import { Grid, Container } from '@material-ui/core';
import './cart.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/cart/action';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { AppState } from 'models/state/app-state.model';

const cartService = new CartService();

interface Props {
    cart: string[];
    addToCart: typeof actions.addToCart;
    removedFromCart: typeof actions.removedFromCart;
}

const Cart: React.FC<Props> = ({ cart, addToCart, removedFromCart }) => {

    const [booksI, setBooks] = useState<BookModel[]>([])
    const [total, setTotalPrice] = useState(0)

    const getCartItems = async () => {
        const items = await cartService.getCartItems(cart);
        const { totalPrice, booksInCart } = items;

        setTotalPrice(totalPrice);
        setBooks(booksInCart);
        return booksInCart;
    };

    useEffect(() => {
        getCartItems();
    }, []);




    const cartItem = booksI.map((book) => {
        return <CartItem
            title={book.title}
            price={book.price}
            key={book.id}
            id={book.id}
            addedBook={addToCart}
            removedBookFromCart={removedFromCart}
            getTotalPrice={getCartItems} />
    });

    return (
        <div>
            <Container>
                <Grid container direction="row" justify="flex-start" >
                    <h2 className="title">Title</h2>
                    <Grid item className="categories">
                        <Grid container direction="row" justify="space-between">
                            <h2 className="amount">Amount</h2>
                            <h2 className="price">Price</h2>
                            <h2 className="price_total">Total Price</h2>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="column" justify="space-between" >
                    {cartItem}
                </Grid>
                <Grid container justify="flex-end" className="price_total">
                    <h2>Total {total}$</h2>
                </Grid>
            </Container>
        </div>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        cart: state.cart.books,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    const { addToCart, removedFromCart } = bindActionCreators(actions, dispatch)
    return {
        addToCart,
        removedFromCart
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);