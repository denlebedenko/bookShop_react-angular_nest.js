import React from 'react';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import './cart.scss'
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
    return (
        <React.Fragment>
            <div className="empty_wrapp">
                <div className="icon">
                    <ShoppingBasketRoundedIcon id="empty_cart_icon" />
                </div>
                <div className="links">
                    <h2>Yout cart is empty!</h2>
                    <Link to='/'>Back To List</Link>
                </div>
            </div>
        </React.Fragment>

    )
}

export default CartEmpty;
