import { all, call, takeLatest, put, takeEvery, select } from 'redux-saga/effects'

import { clearCart, mergeCartWithFireBase } from './cart.action';
import { selectCartItems } from './cart.selectors';
import UserActionTypes from '../user/user.types';
import { selectCurrentUser } from '../user/user.selectors';
import { CartActionTypes } from './cart.types';
import { getUserCartRef } from '../../firebase/firebase.utils';
import { mergeCarts } from './cart.utils'

export function* clearCartOnSignOut(){
   yield put(clearCart());
}

export function* updateFireBaseCart(){ 
    try{ 
        const currentUser = yield select(selectCurrentUser);
       
        if(currentUser){
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        }
    }
    catch(ex){
        console.log(ex);
    }
}

export function* checkUserFireBaseCart({ payload: user }){ 
    try{ 
        const cartRef = yield getUserCartRef(user.id);
        const snapShot = yield cartRef.get();
        const cartItems = yield select(selectCartItems);   
        const mergedCart = mergeCarts(cartItems, snapShot.data().cartItems); 
        yield put(mergeCartWithFireBase(mergedCart)); 
    }
    catch(ex){
        console.log(ex);
    }
}

export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
    )
}

export function* onSignInSuccess(){
    yield takeLatest(
        UserActionTypes.SIGN_IN_SUCCESS, 
        checkUserFireBaseCart
    )
}

export function* onCartChange(){ 
    yield takeLatest(
        [CartActionTypes.ADD_ITEM,
        CartActionTypes.DELETE_ONE_ITEM,
        CartActionTypes.CLEAR_CART,
        CartActionTypes.CLEAR_ITEM_FROM_CART],
        updateFireBaseCart
    )
}

export function* onMergeCartWithFireBase(){
    yield takeLatest(
        CartActionTypes.MEGRE_CART_WITH_FIRE_BASE,
        updateFireBaseCart
    )
}

export function* cartSagas(){ 
    yield all([call(onSignOutSuccess), call(onCartChange), call(onSignInSuccess), call(onMergeCartWithFireBase)])
}

export default cartSagas;