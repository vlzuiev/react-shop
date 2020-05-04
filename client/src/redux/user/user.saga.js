import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import UserTypes from './user.types';
import { googleProvider, auth, createOrUpdateUserProfileDocument, getCurrentUser, emailAuthProv } from '../../firebase/firebase.utils';
import { sendEmailResetEmail } from '../../firebase/user.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, 
    signUpFailure, signUpSuccess, signInStart, forgotEmailFailure, forgotEmailSuccess, toggleShowMenu, 
    clearErrorMessage, changePasswordFailure, changePasswordSuccess } from './user.action'; 
import { showNotification } from '../notification/notification.actions';
import UserActionTypes from './user.types';
import { selectUserEmail } from './user.selectors'


function* getSnapshotFromUserAuth(userAuth, additionalData){
    const userRef = yield call(createOrUpdateUserProfileDocument, userAuth, additionalData);

    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}));
 
}

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        .catch(() => {
            throw Object.assign(
                new Error('Cannot sign in with google'),
                { code: 402 }
             );
        });
 
        // yield sendEmailResetEmail(user.email);
        yield getSnapshotFromUserAuth(user, { lastLogin: new Date()});
    } catch (err) { 
        yield put(signInFailure(err))
    }
}

function* signInWithEmail({ payload: { email, password }}){
    try{
        yield put(signInStart());
        const { user } = yield auth.signInWithEmailAndPassword(email, password);  
        yield getSnapshotFromUserAuth(user, { lastLogin: new Date()});
    }catch(err){
        yield put(showNotification('error'));
        yield put(signInFailure(err));
    }
}

function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser(); 
        if(!userAuth) return; 
        yield getSnapshotFromUserAuth(userAuth);
    }catch(err){
        yield put(signInFailure(err));
    }
}

function* signOut(){
    try{
        yield auth.signOut();
        yield put(toggleShowMenu());
        yield put(signOutSuccess());
    }catch(err){
        yield put(signOutFailure(err));
    }
}

function* signUp({payload: {email, password, displayName}}){  
    try{  
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);

        yield createOrUpdateUserProfileDocument( user, { displayName, lastLogin: new Date() });
        yield put(signUpSuccess({user, additionalData: { displayName, lastLogin: new Date()}}))
        yield getSnapshotFromUserAuth(user); 
    }
    catch(err){
        yield put(signUpFailure(err));
    }
}

function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData); 
}

function* forgotEmail({ payload }){
    try{
        yield sendEmailResetEmail(payload);
        yield put(showNotification('success')); 
        yield put(clearErrorMessage());
        yield put(forgotEmailSuccess());
    }catch(err){
        yield put(showNotification('error'));
        yield put(forgotEmailFailure(`There is no account with ${payload} email`));
    }
} 

function* changePassword({ payload: { oldPassword, newPassword }}){
    try{    
        const email = yield select(selectUserEmail);
        const user = auth.currentUser;
        const credential = yield emailAuthProv.credential(email, oldPassword);

        yield user.reauthenticateWithCredential(credential);  
        yield user.updatePassword(newPassword);
        
        yield put(changePasswordSuccess());
        yield put(showNotification('success')); 
        yield put(clearErrorMessage()); 
    }catch(err){
        yield put(showNotification('error')); 
        yield put(changePasswordFailure(err));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(
        UserTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}

export function* onEmailSignInStart(){
    yield takeLatest(
        UserTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserTypes.CHECK_USER_SESSION,
        isUserAuthenticated 
    )
}

export function* onSignOutStart(){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOut
    )
} 

export function* onSignUpStart(){
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        signUp
    )
}

export function* onSignUpSuccess(){
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        signInAfterSignUp
    )
}

export function* onForgotEmailStart() {
    yield takeLatest(
        UserActionTypes.FORGOT_EMAIL_START,
        forgotEmail
    );
} 

export function* onChangePasswordStart(){ 
    yield takeLatest(
        UserActionTypes.CHANGE_PASSWORD_START,
        changePassword
    )
}
export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), 
        call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess), call(onForgotEmailStart),
        call(onChangePasswordStart)]);
} 

export default userSagas;