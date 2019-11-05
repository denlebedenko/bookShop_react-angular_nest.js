import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { BookModel } from '../../models';
import TokenStorage from '../../services/token.storage';    
import DeleteIcon from '@material-ui/icons/Delete';

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

  const cancelChoiceBtn = (_id: any) => {
    const bookList: Array<BookModel> = JSON.parse(tokenStorage.getBooks()) || [];


    const findBook = bookList.findIndex(book => book === _id);
    bookList.splice(findBook, 1);

    const bookString: string = JSON.stringify(bookList);
    tokenStorage.setBooks(bookString);
  }

const CartItem:React.FC<Props> = ({title, price, _id}) => {

    const amount = bookCountLength(_id);
    const priceTotal = price * amount;

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
                 <IconButton aria-label="delete" onClick={()=> {cancelChoiceBtn(_id)}}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
            
        </div>
    );
};  

export default CartItem;
