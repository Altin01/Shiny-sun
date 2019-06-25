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

import AuthLoadingScreen from '../screens/AuthLoadingScreen';

//qito skreena na vyjn per me shti me ni navigator qe nese useri nuk osht i llogum apo i regjistrum me thirr qit navigator edhe mu llogu useri 
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import CameraScreen from '../screens/CameraScreen';
import EditProfile from '../screens/profile/EditProfile';
import CreditCard from  '../screens/profile/CreditCard';
import PushNotifications from '../screens/profile/PushNotifications';
import Statistics from '../screens/profile/Statistics';


import PasswordScreen from '../screens/profile/PasswordScreen';
import LogoutScreen from '../screens/profile/LogoutScreen';

import MyNavigator from '../navigation/MyNavigator';




  

//-------------------------------------------------------------------------
//Stacku kryesor per home screen 
const mainStackNavigator = createStackNavigator({
   Tabs:MyNavigator,
   Password:{
      screen:PasswordScreen,
    
   },
   Logout:{screen:LogoutScreen},
   Camera:{screen:CameraScreen},
   EditProfile:{screen:EditProfile},
   CreditCard:CreditCard,
   PushNotifications:PushNotifications,
   Statistics:Statistics,

   
},{
  defaultNavigationOptions:{
     header:null
  }
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
  Home :mainStackNavigator,
  Register : registerStackNavigator

  
})

//qitu e eksortojna mrena appcontainer navigatorin kryesor ose parent navigatorin qe osht switch navigatori
export default createAppContainer(switchNavigator);