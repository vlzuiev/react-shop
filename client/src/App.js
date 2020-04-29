import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './glogal.styles';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import Header from './components/header/header.container';
import Spinner from './components/spinner/spinner.component';
import ErrorPage from './components/error-nomatch/error-nomatch.component';
import { IconContext } from 'react-icons';
import ErrorBoundary from './components/error-boudary/error-boundary.component';
import AuthenticatedRoute from './utils/components/authenticated-route/authenticated-route.container';
//lazy loading with pages
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInUpPage = lazy(() => import('./pages/signinup/signinup.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const FavoritePage = lazy(() => import('./pages/favorite/favorite.component'));
const ForgotPasswordPage = lazy(() => import('./pages/forgot-password/forgot-password.container'));
const Profile = lazy(() => import('./pages/profile/profile.component'));

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}> 
              <Switch> 
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact path='/forgot-password' component={ForgotPasswordPage} />
                <Route exact path='/favorite' component={FavoritePage} /> 
                <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInUpPage />)} />
                <AuthenticatedRoute exact path='/profile' component={Profile} />
                <Route component={ErrorPage} /> 
              </Switch>
            </Suspense> 
          </ErrorBoundary> 
        </Router>
      </IconContext.Provider>
    </div>
  );
} 

export default App;


