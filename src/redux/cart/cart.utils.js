
export const addItemToCart = (cartItems, cartItemToAdd) => { 
    const existingCatItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
     
    if(existingCatItem){
        let items = cartItems.map(item => item.id === cartItemToAdd.id 
            ? {...item, quantity: item.quantity + 1} 
            : item); 
        return items;
    }  
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
} 


export const deleteOneItemFromCart = (cartItems, cartItemToDelete) => {
    const existingCatItem = cartItems.find(cartItem => cartItem.id === cartItemToDelete.id);

    if(existingCatItem){
        let items = cartItems.map(item => { 
            if(item.id === cartItemToDelete.id && item.quantity > 1){
                return {...item, quantity: item.quantity - 1 };
            }  else if(item.id === cartItemToDelete.id && item.quantity === 1) {
                return null;
            }else{
                return item;
            }
        }); 
        let filetredItems = items.filter(item => item !== null);

        return filetredItems; 
    }  
    return [...cartItems];
}