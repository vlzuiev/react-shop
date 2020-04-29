import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import notificationReducer from './notification/notification.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import favoriteReducer from './favorite/favorite.reducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { 
    key: 'root',
    storage,
    whitelist:[
        'cart',
        'favorite'
    ]
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    favorite: favoriteReducer,
    notification: notificationReducer
}); 

export default persistReducer(persistConfig, rootReducer);