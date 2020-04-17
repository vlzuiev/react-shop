import { createSelector } from 'reselect';

const selectFavorite = state => state.favorite;

export const selectFavoriteItems = createSelector(
    [selectFavorite],
    (favorite) => favorite.favoriteItems
);

export const selectFavoriteItemsCount = createSelector(
    [selectFavoriteItems],
    (items) => items.reduce((acum) => acum + 1, 0)
); 