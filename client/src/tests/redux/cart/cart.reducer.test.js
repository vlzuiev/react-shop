import cartReducer from '../../../redux/cart/cart.reducer'; 
import * as actions from '../../../redux/cart/cart.action'; 

describe('reducer returns correct state', () => {
    const INITIAL_STATE = {
        hidden: true,
        cartItems: [],
        isMerged: false
    }

    const mockItem = {
        id: 1, 
        name: 'Air',
        quantity: 5
    };

    test('should return initial state', () => { 
        expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
    });


    test('should clear "Air" cart item', () => {  
        const mockState = { 
            hidden: true,
            cartItems: [mockItem],
            isMerged: false
        }

        expect(cartReducer(mockState, actions.clearItemFromCart(mockItem))).toEqual(INITIAL_STATE);
    });

    test('should clear cart items', () => { 
        const mockState = { 
            hidden: true,
            cartItems: [mockItem],
            isMerged: false
        }

        expect(cartReducer(mockState, actions.clearCart())).toEqual(INITIAL_STATE);
    });

    test('should toggle cart hidden', () => {    
        expect(cartReducer(INITIAL_STATE, actions.toggleCartHidden()).hidden).toEqual(false);  
    });

    test('should add one item to cart', () => {    
        expect(cartReducer(INITIAL_STATE, actions.addItem(mockItem)).cartItems).toEqual([{
            id: 1, 
            name: 'Air',
            quantity: 1
        }]);  
    });

    test('should delete one item from cart', () => {  
        const mockState = { 
            hidden: true,
            cartItems: [mockItem],
            isMerged: false
        }
        
        expect(cartReducer(mockState, actions.deleteOneItem(mockItem)).cartItems).toEqual([{
            id: 1, 
            name: 'Air',
            quantity: 4
        }]);  
    });

})