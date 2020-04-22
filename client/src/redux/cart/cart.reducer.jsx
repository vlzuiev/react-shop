import { CartActionTypes } from './cart.types';
import { addItemToCart, deleteOneItemFromCart, deleteItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    isMerged: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM: 
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DELETE_ONE_ITEM:
            return{
                ...state,
                cartItems: deleteOneItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems: [],
                isMerged: false
            }
        case CartActionTypes.MEGRE_CART_WITH_FIRE_BASE: 
            return{
                ...state, 
                cartItems: action.payload,
                isMerged: true
            }
        default:
            return state;
    }
}

export default cartReducer;