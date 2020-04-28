import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
    isLoading: false
}

//action has TYPE and PAYLOAD
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
            
        default:
            return state;
    }
}

export default userReducer;