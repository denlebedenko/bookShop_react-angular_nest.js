import React, { useState, useEffect } from 'react';
import { BookModel } from '../../models';
import CartService from '../../services/cart.service';
import CartItem from './cart-item';
import { Grid, Container } from '@material-ui/core';
import './cart.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/cart/action';
import { bindActionCreators } from 'redux';

const cartService = new CartService();

const Cart: React.FC = ({cart, addToCart, removedFromCart}:any) => {

    const [books, setBooks] = useState<BookModel[]>([])

    const getCartItems = async () => {
        const items = await cartService.getCartItems(cart);
        setBooks(items);
    };

    useEffect(()=> {
        getCartItems();
    }, []);

    const cartItem = books.map((book) => {
        return <CartItem title={book.title} price={book.price} key={book.id} _id={book._id} addedBook={addToCart} removedBookFromCart={removedFromCart}/>
    });
     
     return (
         <div>
             <Container>
                 <Grid container direction="row" justify="flex-start" >
                     <h2 className="title">Title</h2>
                     <Grid item className="categories">
                         <Grid container direction="row"  justify="space-between">
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
                     <h2>Total {12}$</h2>  
                 </Grid>
             </Container>
         </div>
    );
 };
 
 const mapStateToProps = (state:any) => {
    return {
        cart: state.cart.books,
    };
 };
 
 const mapDispatchToProps = (dispatch:any) => {
     const { addToCart, removedFromCart } = bindActionCreators(actions, dispatch)
     return { 
         addToCart,
         removedFromCart
     };
 };
 export default connect(mapStateToProps,mapDispatchToProps)(Cart);