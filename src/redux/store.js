/**
 * @format
 * App redux store with presist gate configuration
 */

import {configureStore as reduxConfigureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

// Screens
import {persistRootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';

/*-----------[ configure store ]------------*/
function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  // New middleware can be added here
  const middleware = [sagaMiddleware];

  const store = reduxConfigureStore({
    reducer: persistRootReducer,
    middleware,
    devTools: true,
  });

  const persistor = persistStore(store);

  // Run sagas
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
}

export {configureStore};
