import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Home from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


//  const Product = () => {
//    return <h1>test</h1>
//  }

function App() {
  return (
    <div className="App">
      <Switch> 
        <Route exact path='/' component={Home} /> 
        <Route path='/shop' component={ShopPage} /> 
      </Switch>

      
    </div>
  );
}

export default App;


