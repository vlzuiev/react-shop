import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
    isLoading: false,
    showMenu: false
}
 
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case UserActionTypes.SIGN_OUT_START:
        case UserActionTypes.SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
        case UserActionTypes.FORGOT_EMAIL_START:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.SIGN_IN_SUCCESS: 
            return {
                ...state,  
                currentUser: action.payload,
                errorMessage: null,
                isLoading: false
            } 
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                errorMessage: null,
                isLoading: false
            }
        case UserActionTypes.FORGOT_EMAIL_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.FORGOT_EMAIL_FAILURE:
            return{
                ...state,
                errorMessage: action.payload,
                isLoading: false
            }
        case UserActionTypes.CLEAR_ERROR_MESSAGE:
            return{
                ...state,
                errorMessage: null
            }
        case UserActionTypes.TOGGLE_SHOW_MENU:
            return{
                ...state,
                showMenu: !state.showMenu
            }
        default:
            return state;
    }
}

export default userReducer;