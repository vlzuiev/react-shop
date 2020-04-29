import React from 'react';
import { FavoriteWrapper, FavoriteHeaderColumn, FavoriteHeaderWrapper, BigText } from './favorite.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFavoriteItems, selectFavoriteItemsCount } from '../../redux/favorite/favorite.selectors';
import FavoriteItem from '../../components/favorite-item/favorite-item.component';

const Favorite = ({ favoriteItems, itemsCount }) => {
    return <FavoriteWrapper>
        {
            itemsCount > 0 ?
                <> <BigText>Favorite List</BigText>
                    <FavoriteHeaderWrapper>
                        <FavoriteHeaderColumn> </FavoriteHeaderColumn>
                        <FavoriteHeaderColumn>Product</FavoriteHeaderColumn>
                        <FavoriteHeaderColumn>Price</FavoriteHeaderColumn>
                    </FavoriteHeaderWrapper>
                    {
                        favoriteItems.map(item => <FavoriteItem key={item.id} item={item} />)
                    }
                </> 
                : <BigText>You don't have any favorite items</BigText>
        }
    </FavoriteWrapper>

}

const mapStateToProps = createStructuredSelector({
    favoriteItems: selectFavoriteItems,
    itemsCount: selectFavoriteItemsCount
});

export default connect(mapStateToProps)(Favorite);