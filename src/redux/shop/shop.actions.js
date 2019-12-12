import ShopActionTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

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

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart()); 

        collectionRef.get().then(snapshot => {  
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollecitonsSuccess(collectionMap)); 
        }).catch(err => dispatch(fetchCollectionsFailure(err)));
    }
}