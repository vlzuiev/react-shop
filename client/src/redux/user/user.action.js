import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (err) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: err
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});
 
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = () => ({
    type: UserActionTypes.SIGN_OUT_FAILURE
});

export const signUpStart = (userData) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userData
});

export const signUpSuccess = (userData) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: userData
});

export const signUpFailure = (err) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: err
}); 

export const signInStart = () => ({
    type: UserActionTypes.SIGN_IN_START
});

export const forgotEmailStart = email => ({
    type: UserActionTypes.FORGOT_EMAIL_START,
    payload: email
});

export const forgotEmailSuccess = () => ({
    type: UserActionTypes.FORGOT_EMAIL_SUCCESS
});

export const forgotEmailFailure = errorMessage => ({
    type: UserActionTypes.FORGOT_EMAIL_FAILURE,
    payload: errorMessage
});

export const clearErrorMessage = () => ({
    type: UserActionTypes.CLEAR_ERROR_MESSAGE
});

export const toggleShowMenu = () => ({ 
    type: UserActionTypes.TOGGLE_SHOW_MENU
});

export const changePasswordStart = (passwords) => ({
    type: UserActionTypes.CHANGE_PASSWORD_START,
    payload: passwords
});

export const changePasswordSuccess = () => ({
    type: UserActionTypes.CHANGE_PASSWORD_SUCCESS
});

export const changePasswordFailure = errorMessage => ({
    type: UserActionTypes.CHANGE_PASSWORD_FAILURE,
    payload: errorMessage
});