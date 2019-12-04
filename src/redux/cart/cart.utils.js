export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCatItem = cartItems.find(cartItem => cartItem.Id === cartItemToAdd.Id);

    if(existingCatItem){
        let item = cartItems.map(item => item.id === cartItemToAdd.id 
            ? {...item, quantity: item.quantity + 1} 
            : item) 
        return item;
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
} 