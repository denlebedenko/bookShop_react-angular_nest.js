import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.scss';
import Auth from '../auth/auth';
import CartBtn from '../cart/cart-btn';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
    },
    title: {
      flexGrow: 1,
    },
    color: {
      backgroundImage: 'linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #9ba0e6, #9ba6eb, #9cacf0, #adaef6, #beb0fa, #cfb2fd, #e1b3ff);'
    },
    type: {
      marginBottom: 20
    },

  }),
);

const Header: React.FC = () => {

  const classes = useStyles();
  return (
    <div className={classes.type}>
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.color}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="text" >
              <p>
                BookShop (React Edition)
                  </p>
            </Link>
          </Typography>
          <Link to="/cart">
            <CartBtn />
          </Link>
          <Auth />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;