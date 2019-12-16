import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 

import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/signinup/signinup.component';
import Checkout from './pages/checkout/checkout.component';
import ErrorPage from './pages/error/error.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';

const App = ({checkUserSession, currentUser}) => {  
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
 
 
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInUp/>) }/>
            <Route path='*' component={ErrorPage}/>
          </Switch>
        </Router> 
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


