import { all, call, takeLatest, put } from 'redux-saga/effects'

import { clearCart } from './car.action';
import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut(){
   yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
    )
}

export function* cartSagas(){ 
    yield all([call(onSignOutSuccess)])
}

export default cartSagas;