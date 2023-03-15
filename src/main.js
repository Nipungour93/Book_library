/**
 * @format
 * App Main
 */

import * as React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';

// Screens
import {NavigationRouter} from '@app/navigation/index';
import {configureStore} from '@app/redux/store';
LogBox.ignoreLogs(['Warning: ...']);

const {store, persistor} = configureStore();

function MainApp() {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        {restored => <NavigationRouter restored={restored} />}
      </PersistGate>
    </StoreProvider>
  );
}

export {MainApp};
