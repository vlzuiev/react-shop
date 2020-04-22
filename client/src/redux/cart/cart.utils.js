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
    const existingCartItem = cartItems.find(item => item.id === cartItemToDelete.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(item => item.id !== cartItemToDelete.id);
    }
    return cartItems.map(item => item.id === cartItemToDelete.id ? {...item, quantity: item.quantity - 1 } : item)
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    return cartItems.filter(item => item.id !== cartItemToDelete.id);
}  

export const mergeCarts = (cartItems1, cartItems2) => {
    let newCartItems2 = cartItems2;
    const checkQuantity = cartItems1.map(item => {
        const existingItem = newCartItems2.find(x => x.id === item.id);
         
        if(existingItem){ 
            newCartItems2 = deleteItemFromCart(newCartItems2, existingItem);
            return { ...item, quantity: item.quantity + existingItem.quantity};
        }else{ 
            return item;
        }
    }); 
     
    if(newCartItems2.length > 0){
        return checkQuantity.concat(newCartItems2);
    }
    else{
        return checkQuantity;
    }
}