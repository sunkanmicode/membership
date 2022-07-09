// import React from 'react';
import * as React from 'react';
import {Text, View} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MembershipCard from '../../screens/MembershipCard';
import MembershipList from '../../screens/MembershipList';
import MembershipCard2 from '../../screens/MembershipCard2.js';


const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MembershipCard" component={MembershipCard} />
      <Tab.Screen name="MembershipCard2" component={MembershipCard2} />
      <Tab.Screen name="MembershipList" component={MembershipList} />
    </Tab.Navigator>
  );
};
export default HomeNavigator;
