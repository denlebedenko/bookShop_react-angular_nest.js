import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import TokenStorage from '../../services/token.storage';
import { connect } from 'react-redux';

const tokenStorage = new TokenStorage();

interface OwnProp {
    Component: React.FC<any>,
    token: string,
};

type Prop = OwnProp & RouteProps;

const PrivateRoute: React.FC<Prop> = ({Component, token , ...rest }) => {

    const isloggedin = tokenStorage.loggedIn(token);

    return  <Route {...rest} render = { props => isloggedin ? <Component {...props}/> : <Redirect to="/"/> } />
};

        
const mapStateToProps = (state: any) => {
        return {
            token: state.auth.token,
        };
};
          
export default connect(mapStateToProps)(PrivateRoute);
          
          
