import { mergeCarts, deleteOneItemFromCart, deleteItemFromCart } from '../../../redux/cart/cart.utils';

describe('mergeCarts tests', () => {
    test('merge same item with different quantity', () => {
        const mockCart1 = [
            {
                id: 10,
                name: 'Air',
                quantity: 5
            }
        ];

        const mockCart2 = [
            {
                id: 10,
                name: 'Air',
                quantity: 5
            }
        ];

        expect(mergeCarts(mockCart1, mockCart2)).toMatchObject([{
            id: 10,
            name: 'Air',
            quantity: 10
        }]);
    });

    test('merge different items', () => {
        const mockCart1 = [
            {
                id: 10,
                name: 'Air',
                quantity: 5
            }
        ];

        const mockCart2 = [
            {
                id: 11,
                name: 'Bag',
                quantity: 5
            }
        ];

        expect(mergeCarts(mockCart1, mockCart2)).toEqual(
            expect.arrayContaining([
                { id: 10, name: 'Air', quantity: 5 },
                { id: 11, name: 'Bag', quantity: 5 }
            ]));
    });

    test('merge different items and same items with different quantity', () => {
        const mockCart1 = [
            {
                id: 10,
                name: 'Air',
                quantity: 5
            },
            {
                id: 11,
                name: 'Bag',
                quantity: 5
            }
        ];

        const mockCart2 = [
            {
                id: 11,
                name: 'Bag',
                quantity: 5
            }, {
                id: 12,
                name: 'Hat',
                quantity: 2
            }
        ];

        expect(mergeCarts(mockCart1, mockCart2)).toEqual(expect.arrayContaining([
            { id: 10, name: 'Air', quantity: 5 },
            { id: 11, name: 'Bag', quantity: 10 },
            { id: 12, name: 'Hat', quantity: 2 }
        ]));
    })
});

describe('cart simple actions', () => {
    test('delete one item from cart', () => {
        const mockCart = [
            {
                id: 11, 
                name: 'Air Max',
                quantity: 5
            }
        ];

        const mockItemToDelete = mockCart[0];

        expect(deleteItemFromCart(mockCart, mockItemToDelete).length).toBe(0);
    });

    test('delete not existing item from cart', () => {
        const mockCart = [
            {
                id: 11, 
                name: 'Air Max',
                quantity: 5
            }
        ];

        const mockNotExistingItem = {
            id: 10, 
            name: 'Bag',
            quantity: 2
        };

        expect(deleteItemFromCart(mockCart, mockNotExistingItem).length).toBe(1);
    });

    test('decrease quantity of item', () => {
        const mockCart = [
            {
                id: 11, 
                name: 'Air Max',
                quantity: 5
            }
        ];

        const mockItemToDecrease = mockCart[0];

        expect(deleteOneItemFromCart(mockCart, mockItemToDecrease)).toEqual(expect.arrayContaining([
            { id: 11,  name: 'Air Max', quantity: 4 }
        ]));

        expect(deleteOneItemFromCart(mockCart, mockItemToDecrease)[0].quantity).toEqual(4);
    });

    // test()

});