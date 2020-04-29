import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
 
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const deleteOneItem = item => ({
    type: CartActionTypes.DELETE_ONE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});

export const mergeCartWithFireBase = cartItems => ({
    type: CartActionTypes.MERGE_CART_WITH_FIRE_BASE,
    payload: cartItems
});