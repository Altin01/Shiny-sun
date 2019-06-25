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
import SettingsScreen from '../screens/settings/SettingsScreen';





const HomeStack = createStackNavigator({
    Home:{
        screen: HomeScreen
    }
    
},);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'?'ios-home':'md-home'
        
        }
      />
    ),
    
  };

//Setting stack navigatori 
const SettingsStack = createStackNavigator({
    Settings: {
      screen:SettingsScreen
    }
  },{
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: '#A9A9A9',
          elevation: 0,
          shadowOpacity: 0
      },
      headerTintColor: '#333333',
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff'
      }
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
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: '#A9A9A9',
          elevation: 0,
          shadowOpacity: 0
      },
      headerTintColor: '#333333',
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff'
      }
  }
  });
 
  
   
  ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
      />
    ),

  };


const homeTabNavigator = createBottomTabNavigator({
    HomeStack,
    ProfileStack,
    SettingsStack,


},{
  navigationOptions:{
    
    header:null
  }
});

homeTabNavigator.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null,
};

export default createAppContainer(homeTabNavigator);