import FavoriteActionTypes from './favorite.types';
import { addOneFavorite, removeOneItem, toggleItem } from './favorite.utils';

const INITIAL_STATE = { 
    favoriteItems: []
}

const FavoriteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FavoriteActionTypes.ADD_TO_FAVORITE: 
            return {
                ...state,
                favoriteItems: addOneFavorite(state.favoriteItems, action.payload)
            }
        case FavoriteActionTypes.REMOTE_FROM_FAVORITE: 
            return {
                ...state,
                favoriteItems: removeOneItem(state.favoriteItems, action.payload)
            }
        case FavoriteActionTypes.TOGGLE_FAVORITE_ITEM: 
            return {
                ...state, 
                favoriteItems: toggleItem(state.favoriteItems, action.payload)
            }
        case FavoriteActionTypes.REMOVE_ALL_FROM_FAVORITE:
            return {
                ...state,
                favoriteItems: []
            }
        default:
            return state;
    }
}

export default FavoriteReducer;