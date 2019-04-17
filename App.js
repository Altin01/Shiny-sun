import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import SwitchNavigation from './navigation/SwitchNavigation';

export default class App extends React.Component {
 

 render() {
      return(
      <View style={styles.container}>
            <SwitchNavigation />
      </View>);
      }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
});
