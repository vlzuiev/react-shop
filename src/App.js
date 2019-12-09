import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/signinup/signinup.component';
import Checkout from './pages/checkout/checkout.component';
import ErrorPage from './pages/error/error.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'

class App extends React.Component { 
  unsubsribeFromAuth = null
  
  componentDidMount() {
    const { setCurrentUser } =this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data()
          }); 
        });
       
      }else{
        setCurrentUser(userAuth);
      } 
    })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUp/>) }/>
            <Route path='*' component={ErrorPage}/>
          </Switch>
        </Router> 
      </div>
    );
  }
  
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
}) 

const mapDispatchToProps = dispatch => {
  return {
  setCurrentUser: user => dispatch(setCurrentUser(user))
}};

export default connect(mapStateToProps, mapDispatchToProps)(App);


