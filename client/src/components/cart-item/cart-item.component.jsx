import React from 'react'
import './cart-item.styles.scss'

import {deleteOneItem} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'


const CartItem = ({ item, deleteOneItem }) => {
    return <div className='cart-item'>
        <img src={item.imageUrl} alt={item.name} />
        <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.quantity} x ${item.price}</span>
        </div>
        <div className='item-delete' onClick={() => deleteOneItem(item)}>
            X
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => ({
    deleteOneItem: (item) => dispatch(deleteOneItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);