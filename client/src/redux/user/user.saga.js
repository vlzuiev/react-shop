import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserTypes from './user.types';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser, updateUserProfileDocument } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess, signInStart } from './user.action';
import UserActionTypes from './user.types';


function* getSnapshotFromUserAuth(userAuth, additionalData){
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);

    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}));
 
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield updateUserProfileDocument(user, { lastLogin: new Date()});
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        yield put(signInFailure(err))
    }
}

function* signInWithEmail({ payload: { email, password }}){
    try{
        yield put(signInStart());
        const { user } = yield auth.signInWithEmailAndPassword(email, password); 
        yield updateUserProfileDocument(user, { lastLogin: new Date()});
        yield getSnapshotFromUserAuth(user);
    }catch(err){
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
        yield put(signOutSuccess());
    }catch(err){
        yield put(signOutFailure(err));
    }
}

function* signUp({payload: {email, password, displayName}}){  
    try{ 
        console.log(email, password, displayName);
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);

        yield createUserProfileDocument( user, {displayName});
        yield put(signUpSuccess({user, additionalData: { displayName}}))
        yield getSnapshotFromUserAuth(user); 
    }
    catch(err){
        yield put(signUpFailure(err));
    }
}

function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData); 
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

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)])
}


export default userSagas;