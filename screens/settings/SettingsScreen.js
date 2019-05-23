import React from 'react';
import {View,Text,StyleSheet,Dimensions } from 'react-native';
import ProfileButton from '../../components/ProfileButton';

let {height,width} = Dimensions.get('window');
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    header:null
  };

  render() {
    return (
      <View style={styles.container}>
       
      <ProfileButton width={width*0.83}  name="Calendar" onPress={()=>this.props.navigation.navigate('Calendar')}/>
    
  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    flex:1

  }
})