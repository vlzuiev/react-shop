import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/signinup/signinup.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={ 
      currentUser: null
    }
  }
  unsubsribeFromAuth = null

  componentDidMount() {
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({ currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }});
          console.log(this.state);
        });
       
      }else{
        this.setState({currentUser: userAuth});
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
          <Header currentUser={this.state.currentUser} />
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

export default App;


