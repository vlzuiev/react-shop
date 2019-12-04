import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/signinup/signinup.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component { 
  unsubsribeFromAuth = null
  
  componentDidMount() {
    const { setCurrentUser } =this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log("user auth is" , userAuth)
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
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInUp} />
          </Switch>
        </Router> 
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => {
 
  return {
  setCurrentUser: user => dispatch(setCurrentUser(user))
}};

export default connect(null, mapDispatchToProps)(App);


