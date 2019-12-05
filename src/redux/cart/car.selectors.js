import {createSelector} from 'reselect'; 

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acum, item) => acum + item.quantity, 0)
);

export const selectCartHidden = createSelector(
    selectCart,
    cart => cart.hidden
);