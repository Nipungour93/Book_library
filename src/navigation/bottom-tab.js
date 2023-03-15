/**
 * @format
 * Bottom Tab for app
 */

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Colors, ScaledSheet} from '@app/styles';
import {BookList, CategoryList,BookMark} from '@app/modules/books';
import {Drawer} from './drawer';

const BottomTab = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        tabBarActiveTintColor: '#FFBC13',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'BookStack') {
            iconName = focused ? 'book' : 'book';
          } else if (route.name === 'CategoryStack') {
            iconName = focused ? 'book' : 'book';
          } else if (route.name === 'BookMarkStack') {
            iconName = focused ? 'bookmark' : 'bookmark-o';
          }
          return (
            <FontAwesome name={iconName} size={size} color={color} />
          );
        },
      })}>
      <BottomTab.Screen
        name="BookStack"
        component={BookList}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="CategoryStack"
        component={CategoryList}
        options={{
          // tabBarLabel: 'Settings',
          // title: 'Setting',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="BookMarkStack"
        component={BookMark}
        options={{
          // tabBarLabel: 'Settings',
          // title: 'Setting',
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

function AppBottomTab() {
  return (
    <DrawerStack.Navigator
      screenOptions={{headerShown: false, drawerType: 'front'}}
      drawerContent={props => <Drawer {...props} />}>
      <DrawerStack.Screen name={'drawer'} component={BottomTabs} />
    </DrawerStack.Navigator>
  );
}

const styles = ScaledSheet.create({
  bottomTabIcon: {
    height: '25@ms',
    width: '25@ms',
  },
  tabbarStyle: {
    backgroundColor: Colors.Primary,
    height: '45@ms',
    paddingTop: '5@ms',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.3},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 20,
  },
});
export {AppBottomTab};
