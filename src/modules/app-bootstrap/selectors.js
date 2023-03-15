/**
 * App bootstrap selectors
 * @format
 */

import type { RootState } from '@app/redux';

const appBootstrapReducer = (state: RootState) => state.appBootstrapReducer;

export const selectIsAppReady = (state: RootState) =>
  appBootstrapReducer(state).ready;
