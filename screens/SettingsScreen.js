import React from 'react';
import {View,Text,StyleSheet } from 'react-native'


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    header:null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Settings Screen
        </Text>

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