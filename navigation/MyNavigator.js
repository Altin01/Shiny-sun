import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';

import React from 'react';
import { Platform } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';





const HomeStack = createStackNavigator({
   
    Home:{
        screen: HomeScreen
    }
     
    
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',

    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };

//Setting stack navigatori 
const SettingsStack = createStackNavigator({
    Settings: {
      screen:SettingsScreen
    }
  });
   //qitu e rre
  SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };
  
  
  const  ProfileStack = createStackNavigator({
      Profile:{
          screen : ProfileScreen
      }

  },{
    navigationOptions:({navigation})=>{
       return header = false
     }
    
  });
 
  
   
  ProfileStack.navigationOptions = {
  
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    ),

  };


const homeTabNavigator = createBottomTabNavigator({
    HomeStack,
    ProfileStack,
    SettingsStack,


})

export default createAppContainer(homeTabNavigator);