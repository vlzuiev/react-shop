import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserTypes from './user.types';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess } from './user.action';
import UserActionTypes from './user.types';


export function* getSnapshotFromUserAuth(userAuth){
    const userRef = yield call(createUserProfileDocument, userAuth);

    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}));
 
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* signInWithEmail({ payload: { email, password }}){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }catch(err){
        yield put(signInFailure(err))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser(); 
        if(!userAuth) return; 
        yield getSnapshotFromUserAuth(userAuth);
    }catch(err){
        yield put(signInFailure(err));
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(err){
        yield put(signOutFailure(err));
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

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart)])
}
