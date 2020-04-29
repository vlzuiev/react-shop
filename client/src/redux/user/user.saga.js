import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserTypes from './user.types';
import { googleProvider, auth, createOrUpdateUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { sendEmailResetEmail } from '../../firebase/user.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, 
    signUpFailure, signUpSuccess, signInStart, forgotEmailFailure, forgotEmailSuccess, toggleShowMenu } from './user.action'; 
import { showNotification } from '../notification/notification.actions';
import UserActionTypes from './user.types';


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
        yield put(forgotEmailSuccess());
    }catch(err){
        yield put(showNotification('error'));
        yield put(forgotEmailFailure(`There is no account with ${payload} email`));
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

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), 
        call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess), call(onForgotEmailStart)]);
} 

export default userSagas;