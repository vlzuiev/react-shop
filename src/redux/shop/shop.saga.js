import {
    takeLatest,
    call,
    put
} from 'redux-saga/effects';

import {
    firestore,
    convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'

import ShopActionTypes from './shop.types';

import {
    fetchCollecitonsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollecitonsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}