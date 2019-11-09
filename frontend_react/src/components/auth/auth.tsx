import React from 'react';
import SignIn from './signin';

import Registrer from './registrer';
import { Grid } from '@material-ui/core';
import Logout from './logout';
import TokenStorage from '../../services/token.storage';
import { connect } from 'react-redux'

const tokenStorage = new TokenStorage();

interface Props {
  token: string;
}

const Auth: React.FC<Props> = ({token}) => {

  let logged = tokenStorage.loggedIn(token);

  let authBtns: JSX.Element = <div className="auth">
                              <Grid container direction="row">
                                <SignIn />
                                <Registrer />
                              </Grid> 
                            </div>

  return (
    <div>
      { logged ?  <Logout /> : authBtns } 
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Auth);
