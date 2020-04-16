import FavoriteActionTypes from './favorite.types';

export const addItemToFavorite = item => ({
    type: FavoriteActionTypes.ADD_TO_FAVORITE,
    payload: item
}) 

export const removeItemFromFavorite = item => ({
    type: FavoriteActionTypes.ADD_TO_FAVORITE,
    payload: item
});

export const removeAllFromFavorite = () => ({
    type: FavoriteActionTypes.REMOTE_FROM_FAVORITE
});