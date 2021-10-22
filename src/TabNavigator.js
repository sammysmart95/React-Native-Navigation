import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {StackNavigation, ContactStackNavigator} from './StackNavigation';
import IconGenerator from './IconComp/Index';

const Tab = createBottomTabNavigator();

const iconProperty = iconName => ({
  labelStyle: {
    color: '#044991',
  },
  icon: {
    component: () => <IconGenerator tagName={iconName} color="#232332" />,
    activeColor: '#232332',
    inactiveColor: '#232332',
  },
  background: {
    activeColor: 'rgba(223,215,243,1)',
    inactiveColor: 'rgba(223,215,243,0)',
  },
});

const tabs = {
  Home: iconProperty('Home'),
  Contact: iconProperty('Email'),
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <AnimatedTabBar tabs={tabs} preset="flashy" {...props} />
      )}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
