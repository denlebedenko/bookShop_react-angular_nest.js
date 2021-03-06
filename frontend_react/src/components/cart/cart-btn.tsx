import React from 'react';
import { connect } from 'react-redux';
import TokenStorage from '../../services/token.storage';
import { Box, withStyles, Theme, createStyles, Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './cart.scss';
import { AppState } from 'models/state/app-state.model';

const tokenStorage = new TokenStorage();


const StyledBadge1 = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      color: 'rgb(186, 0, 233)',
      backgroundColor: 'white',
    },
  }),
)(Badge);

interface Props {
  token: string;
  bookIds: string[]
}


const CartBtn: React.FC<Props> = ({ token, bookIds }) => {

  const amount: number = bookIds.length;

  let logged: boolean = tokenStorage.loggedIn(token);

  const cart = <Box m={1}>
    <IconButton aria-label="cart">
      <StyledBadge1 badgeContent={amount} color="primary">
        <ShoppingCartIcon className="cart_icon" />
      </StyledBadge1>
    </IconButton>
  </Box>
  return (
    <div>
      {logged ? cart : null}
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    token: state.auth.token,
    bookIds: state.cart.books,
  };
};

export default connect(mapStateToProps)(CartBtn);

