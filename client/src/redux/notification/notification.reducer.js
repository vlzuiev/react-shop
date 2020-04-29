import NotificationActionTypes from './notification.types';

const INITIAL_STATE = {
    open: false,
    //error, warning, info, success
    type: 'success'
};

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case NotificationActionTypes.SHOW_NOTIFICATION:
            return{
                ...state,
                open: true,
                type: action.payload
            }
        case NotificationActionTypes.CLOSE_NOTIFICATION:
            return{
                ...state,
                open: false, 
            } 
        default:
            return state;
    }
}

export default notificationReducer;