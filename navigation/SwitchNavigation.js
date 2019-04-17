import React,{Component} from 'react';
import {createAppContainer,createSwitchNavigator,createDrawerNavigator,createStackNavigator} from 'react-navigation';

//qito screena i shtina me ni navigator tjeter qe ka mu pararqit nese useri osht i llogum 
import HomeScreen from '../screens/HomeScreen';
import LinkScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

//qito skreena na vyjn per me shti me ni navigator qe nese useri nuk osht i llogum apo i regjistrum me thirr qit navigator edhe mu llogu useri 
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

//drawer navigatori qe i man screenat kryesore te appit masi tllogohet useri
const homeDrawerNavigator = createDrawerNavigator({
    Home :{
        screen : HomeScreen,
    },
    Link :{
        screen:LinkScreen
    },
    Settings : {
        screen :SettingsScreen
    }
})

//stackNav qe i man screena-t qe sherbejn per mu llogu useri
const registerStackNavigator = createStackNavigator({
   Welcome : WelcomeScreen,
   Signin : SigninScreen,
   Signup : SignupScreen

})


//qyky osht parent navigatori qe ka dis anvaigator brenda si child 
const switchNavigator = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  Home : homeDrawerNavigator,
  Register : registerStackNavigator

  
})

//qitu e eksortojna mrena appcontainer navigatorin kryesor ose parent navigatorin qe osht switch navigatori
export default createAppContainer(switchNavigator);