/**
 * @format
 * Main section for app
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@app/constants';

import {BookDetailsScreen,BookList,CategoryDetails} from '@app/modules/books/index';

import {AppBottomTab} from './bottom-tab';

const Stack = createNativeStackNavigator();

function MainSection() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'AppBottomTab'} component={AppBottomTab} />
      <Stack.Screen
        name={Routes.BookDetailsScreen}
        component={BookDetailsScreen}
      />
      <Stack.Screen
        name={Routes.BookList}
        component={BookList}
      />
      <Stack.Screen
        name={Routes.CategoryDetails}
        component={CategoryDetails}
      />
    </Stack.Navigator>
  );
}

export {MainSection};
