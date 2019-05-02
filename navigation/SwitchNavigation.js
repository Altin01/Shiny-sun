import {
    createAppContainer,
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import React from 'react';
// importojna Platformen qe na vyn per stack navigatort edhe tabbaricon qe na vyn per icona
import { Platform } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';


//qito screena i shtina me ni navigator tjeter qe ka mu pararqit nese useri osht i llogum 
import HomeScreen from '../screens/HomeScreen';
import LinkScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

//qito skreena na vyjn per me shti me ni navigator qe nese useri nuk osht i llogum apo i regjistrum me thirr qit navigator edhe mu llogu useri 
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import CameraScreen from '../screens/CameraScreen';

import PasswordScreen from '../screens/profile/PasswordScreen';
import LogoutScreen from '../screens/profile/LogoutScreen';



//drawer navigatori qe i man screenat kryesore te appit masi tllogohet useri
// const homeDrawerNavigator = createDrawerNavigator({
//     Home :{
//         screen : HomeScreen,

//     },
//     Camera :{
//         screen:CameraScreen
//     },
//     Settings : {
//        screen :SettingsScreen
//     },  
//     Profile :{
//         screen: ProfileScreen
//     }
 
// },
// )

//========================================================
//Stack navigatori i Home-it
const HomeStack = createStackNavigator({
   
    Home:{
        screen: HomeScreen
    },
     Camera:{   
        screen:CameraScreen, 
    },
    
    
})

HomeStack.navigationOptions =({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
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
     
};
  
// HomeStack.navigationOptions = {
//     tabBarLabel: 'Home',

//     tabBarIcon: ({ focused }) => (
//       <TabBarIcon
//         focused={focused}
//         name={
//           Platform.OS === 'ios'
//             ? `ios-information-circle${focused ? '' : '-outline'}`
//             : 'md-information-circle'
//         }
//       />
//     ),
//   };
//-------------------------------------------------------------------------


//stack navigator per profile screen 
//-----------------------------------------------------------------------
const ProfileStack = createStackNavigator({
    Profile : {
        screen : ProfileScreen
    },
    Password :{
        screen : PasswordScreen
    },
    Logout :{
        screen : LogoutScreen
    }
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    ),
  };
  //-----------------------------------------------------------------
 
//Setting stack navigatori 
const SettingsStack = createStackNavigator({
    Settings: {
      screen:SettingsScreen
    }
  });

  SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };


// Tab navigatori Kryesor
const homeTabNavigator = createBottomTabNavigator({
    HomeStack,
    ProfileStack,
    SettingsStack
})


//stackNav qe i man screena-t qe sherbejn per mu llogu useri
const registerStackNavigator = createStackNavigator({
   Welcome : WelcomeScreen,
   Signin : SigninScreen,
   Signup : SignupScreen
  
}) 

//qyky osht parent navigatori qe ka disa nvaigator brenda si child 
const switchNavigator = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  Home :homeTabNavigator,
  Register : registerStackNavigator

  
})

//qitu e eksortojna mrena appcontainer navigatorin kryesor ose parent navigatorin qe osht switch navigatori
export default createAppContainer(switchNavigator);