import React, { useState, useEffect } from 'react'
import TokenStorage from '../../services/token.storage';
import { BookModel } from '../../models';
import CartService from '../../services/cart.service';
import CartItem from './cart-item';
import { Grid, Container } from '@material-ui/core';
import './cart.scss';

const tokenStorage = new TokenStorage();
const cartService = new CartService();

const Cart: React.FC = () => {

    const purchasedBooks = JSON.parse(JSON.stringify(tokenStorage.getBooks()));
    const list = JSON.parse(purchasedBooks) || [];

    const [books, setBooks] = useState<BookModel[]>([])

    const getCartItems = async () => {
        const items = await cartService.getCartItems(list);
        setBooks(items)
    }

    useEffect(()=> {
        getCartItems()
    }, [])
    
    const cartItem = books.map((book) => {
       return <CartItem title={book.title} price={book.price} key={book.id}/>
    })
    
    return (
        <div>
            <Container>
            <Grid container direction="row" justify="space-between" className="title">
                
                <h2>Title</h2>
                <Grid item>
                    <Grid container direction="row">
                        <h2 className="amount">Amount</h2>   
                        <h2 className="price">Price</h2>
                    </Grid>
                    
                </Grid>
            </Grid>
                <Grid container direction="column" justify="space-between" >
                    {cartItem}
                </Grid>
            </Container>
        </div>
    );
};

export default Cart;



