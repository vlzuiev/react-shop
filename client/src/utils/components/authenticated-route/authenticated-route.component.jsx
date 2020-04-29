import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ currentUser, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        currentUser ? <Component {...props} /> : <Redirect to='/' />
      )} />
); 

export default AuthenticatedRoute;