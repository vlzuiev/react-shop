import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import App from './App.container';
import {store, persistor} from './redux/store'

ReactDOM.render( 
    <Provider store={store} >
        <BrowserRouter>
            <PersistGate persistor={persistor}/> 
            <App />
        </BrowserRouter> 
    </Provider>
    , document.getElementById('root'));


serviceWorker.register();
