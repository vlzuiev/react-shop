import * as actions from '../../../redux/cart/cart.action';
import { CartActionTypes } from '../../../redux/cart/cart.types';


describe('actions show match', () => {
    const mockItem = {
        id: 10,
        name: 'Air'
    };

    const mockItems = [
        mockItem
    ]

    test('should match clear cart object type', () => {
        const actionResult = actions.clearCart();
        expect(actionResult).toEqual({ type: CartActionTypes.CLEAR_CART });
    });

    test('should match toggle cart object type', () => {
        const actionResult = actions.toggleCartHidden();
        expect(actionResult).toEqual({ type: CartActionTypes.TOGGLE_CART_HIDDEN });
    });
    
    test('should match clear item from cart object type', () => { 
        const actionResult = actions.clearItemFromCart(mockItem); 
        expect(actionResult).toEqual({ type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: mockItem });
    });

    test('should match add item to cart object type', () => {
        const actionResult = actions.addItem(mockItem); 
        expect(actionResult).toEqual({ type: CartActionTypes.ADD_ITEM, payload: mockItem }); 
    });

    test('should match merge two carts object type', () => {
        const actionResult = actions.mergeCartWithFireBase(mockItems);
        expect(actionResult).toEqual({ type: CartActionTypes.MEGRE_CART_WITH_FIRE_BASE, payload: mockItems });
    });

    test('should match delete item from cart object type', () => { 
        const actionResult = actions.deleteOneItem(mockItem);
        expect(actionResult).toEqual({ type: CartActionTypes.DELETE_ONE_ITEM, payload: mockItem });
    });

})