import React from 'react'
import CustomButton from '../custom-button/cutom-button.component'
import './collection-item.styles.scss' 
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/car.action'
import { toggleFavoriteItem } from '../../redux/favorite/favorite.actions' 
import { Button } from './collection-item.styles';

const CollectionItem = ({item, addItem , toggleFavorite}) => { 
    const {imageUrl, name, price, id }= item; 
    
    return <div className='collection-item'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
   
        <Button id={id} className='favorite-button' onClick={() => toggleFavorite(item) } /> 
        <div className='collection-footer'>
            <span className='name'>{name}</span> 
            <span className='price'>{price}</span>
        </div>
        <CustomButton className='custom-button' inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
}

const mapDispatchToProps = dispatch => ({ 
    toggleFavorite: item => dispatch(toggleFavoriteItem(item)),
    addItem: item => dispatch(addItem(item))
});  
 
export default connect(null, mapDispatchToProps)(CollectionItem);
