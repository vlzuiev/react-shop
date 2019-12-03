import userReducer from './user/user-reducex';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer
});