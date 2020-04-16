export const addOneFavorite = (favoriteItems, itemToAdd) => {
    const findItem = favoriteItems.find(item => item.id === itemToAdd.id);

    if (findItem)
        return favoriteItems;
    else
        return [...favoriteItems, { ...itemToAdd }]

};

export const removeOneItem = (favoriteItems, itemToRemove) => {
    return favoriteItems.find(item => item.id !== itemToRemove.id);
}