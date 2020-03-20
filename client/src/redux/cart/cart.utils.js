export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCatItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCatItem) {
        let items = cartItems.map(item => item.id === cartItemToAdd.id ?
            {
                ...item,
                quantity: item.quantity + 1
            } :
            item);
        return items;
    }
    return [...cartItems, {
        ...cartItemToAdd,
        quantity: 1
    }]
}


export const deleteOneItemFromCart = (cartItems, cartItemToDelete) => {
    const existingCatItem = cartItems.find(item => item.id === cartItemToDelete.id);

    if(existingCatItem.quantity === 1){
        return cartItems.filter(item => item.id !== cartItemToDelete.id);
    }

    return cartItems.map(item => item.id === cartItemToDelete.id ? {...item, quantity: item.quantity - 1 } : item)
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    return cartItems.filter(item => item.id !== cartItemToDelete.id);
}