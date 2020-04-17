import React from 'react'
import { ItemWrapper, ItemColumn, ItemList, ItemImg, ItemTextBold, ItemLinkButton, ItemText, Break, Button } from './favorite-item.styles';
import { connect } from 'react-redux';
import { removeItemFromFavorite } from '../../redux/favorite/favorite.actions';
import { addItem } from '../../redux/cart/car.action';

const FavoriteItem = ({ item, removeItem, addItemToCart }) => {
    return <ItemWrapper>
        <ItemList>
            <ItemColumn>
                <ItemImg src={item.imageUrl} />
            </ItemColumn>
            <ItemColumn>
                <ItemTextBold>{item.name}</ItemTextBold>
                <ItemLinkButton onClick={() => removeItem(item)}>Remove</ItemLinkButton>
            </ItemColumn>
            <ItemColumn>
                <ItemText>{item.price}$</ItemText>
            </ItemColumn> 
        </ItemList>
        <Break />
        <Button onClick={() => addItemToCart(item)}>Add to cart</Button>

    </ItemWrapper>



}

const mapDispatchToProps = dispach => ({
    removeItem: item => dispach(removeItemFromFavorite(item)),
    addItemToCart: item => dispach(addItem(item))
});

export default connect(null, mapDispatchToProps)(FavoriteItem);