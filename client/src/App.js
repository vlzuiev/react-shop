import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './glogal.styles';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';
import { IconContext } from 'react-icons';

//lazy loading with pages
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInUpPage = lazy(() => import('./pages/signinup/signinup.component'));
const ErrorPage = lazy(() => import('./pages/error/error.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);


  return (
    <div className="App">
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Suspense fallback={<Spinner/>}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInUpPage />)} />
            </Suspense> 
            <Route path='*' component={ErrorPage} />

          </Switch>
        </Router>
      </IconContext.Provider> 
    </div>
  ); 
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


