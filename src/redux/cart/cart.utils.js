import { debug } from "util";

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