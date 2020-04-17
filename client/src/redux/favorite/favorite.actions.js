import FavoriteActionTypes from './favorite.types';

export const addItemToFavorite = item => ({
    type: FavoriteActionTypes.ADD_TO_FAVORITE,
    payload: item
}) 

export const removeItemFromFavorite = item => ({
    type: FavoriteActionTypes.REMOTE_FROM_FAVORITE,
    payload: item
});

export const removeAllFromFavorite = () => ({
    type: FavoriteActionTypes.REMOTE_FROM_FAVORITE
});

export const toggleFavoriteItem = item => ({
    type: FavoriteActionTypes.TOGGLE_FAVORITE_ITEM,
    payload: item
});