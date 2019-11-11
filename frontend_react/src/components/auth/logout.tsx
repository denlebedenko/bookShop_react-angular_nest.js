import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Theme, createStyles, Button } from '@material-ui/core';
import  TokenStorage  from '../../services/token.storage';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { logOut } from '../../store/auth/action';
import { connect } from 'react-redux';

const tokenStorage = new TokenStorage();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
    },
  }),
);

interface Props {
  logout: typeof logOut,
}

const Logout: React.FC<Props> = ({logout}) => {

    const classes = useStyles();


    const logOut = () => {
        logout();
        tokenStorage.removeToken();
    }

    return (
        <div>
            <Button aria-controls="simple-menu" className={classes.root} aria-haspopup="true" onClick={logOut}>
                log out
            </Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    const logout = bindActionCreators(logOut, dispatch)
     return {
        logout
     }
  }

export default connect(null, mapDispatchToProps)(Logout);
