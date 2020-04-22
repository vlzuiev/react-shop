import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import rootSaga from './root.saga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const reduxDevExt = process.env.NODE_ENV === 'development' &&
window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop;

export const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    reduxDevExt
));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };

