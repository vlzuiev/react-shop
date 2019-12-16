import ShopActionTypes from './shop.types'; 

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START 
});

export const fetchCollecitonsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});
 