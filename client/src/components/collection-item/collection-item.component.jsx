import React from 'react'
import CustomButton from '../custom-button/cutom-button.component'
import './collection-item.styles.scss' 
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/car.action'
import { addItemToFavorite } from '../../redux/favorite/favorite.actions' 
import { Button } from './collection-item.styles';
import { selectFavoriteItems } from '../../redux/favorite/favorite.selectors';
import { createStructuredSelector } from 'reselect'

const CollectionItem = ({item, addItem, addFavoriteItem, favoriteItems}) => { 
    const {imageUrl, name, price }= item;
    
    const isActiveFavoriteButton = favoriteItems.find(x => x.id == item.id);
    console.log(isActiveFavoriteButton)
    return <div className='collection-item'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
   
        <Button className='favorite-button' onClick={() =>  addFavoriteItem(item) } 
        isActive={isActiveFavoriteButton ? true : false }/> 
        <div className='collection-footer'>
            <span className='name'>{name}</span> 
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
}
const mapDispatchToProps = dispatch => ({
    addFavoriteItem: item => dispatch(addItemToFavorite(item)),
    addItem: item => dispatch(addItem(item))
});

const mapStateToProps = createStructuredSelector({
    favoriteItems: selectFavoriteItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
