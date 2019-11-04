import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import TokenStorage from '../../services/token.storage';
import { connect } from 'react-redux';
import ModalAuth from './modal-auth';

const tokenStorage = new TokenStorage();

interface OwnProp {
    Component: React.FC<any>,
    token: string,
};

type Prop = OwnProp & RouteProps;

const PrivateRoute: React.FC<Prop> = ({Component, token , ...rest }) => {

    const isloggedin = tokenStorage.loggedIn(token);

    return  <Route {...rest} render = { props => isloggedin ? <Component {...props}/> : <ModalAuth/> } />
};

        
const mapStateToProps = (state: any) => {
        return {
            token: state.auth.token,
        };
};
          
export default connect(mapStateToProps)(PrivateRoute);
          
          
