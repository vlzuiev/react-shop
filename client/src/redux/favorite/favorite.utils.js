export const addOneFavorite = (favoriteItems, itemToAdd) => {
    const findItem = favoriteItems.find(item => item.id === itemToAdd.id);

    if (findItem)
        return favoriteItems;
    else
        return [...favoriteItems, { ...itemToAdd }]

};

export const removeOneItem = (favoriteItems, itemToRemove) => {
    return favoriteItems.filter(item => item.id !== itemToRemove.id);
}

export const toggleItem = (favoriteItems, itemToToggle) => {
    const findItem = favoriteItems.find(item => item.id === itemToToggle.id);
    
    if(findItem) {
        return removeOneItem(favoriteItems, itemToToggle);
    }else{
        return [...favoriteItems, { ...itemToToggle }];
    }
}