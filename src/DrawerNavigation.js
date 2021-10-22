import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingStackNavigator} from './StackNavigation';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Setting" component={SettingStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
