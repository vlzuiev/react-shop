import React, { useRef, useEffect } from 'react';
import CustomButton from '../custom-button/cutom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component'  
import { toggleCartHidden } from '../../redux/cart/cart.action'; 

const useOutsideAlerter = (ref, dispatch, callback) => {
    useEffect(() => { 
        function handleClickOutside(event) {  
            if (ref.current && !ref.current.contains(event.target) 
            && (event.target.classList.contains("item-count") === false 
            && event.target.classList.contains("shopping-icon") === false
            && event.target.classList.contains("cart-icon") === false))   
                dispatch(callback()); 
        } 
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => { 
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, dispatch, callback]);
}

const CartDropDown = ({ cartItems, history, dispatch }) => {
    const wrapperRef = useRef(null);  
    useOutsideAlerter(wrapperRef, dispatch, toggleCartHidden);  
    
    return <div ref={wrapperRef} className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length
                    ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className='empty-message'>Your cart is empty </span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
}

export default CartDropDown;