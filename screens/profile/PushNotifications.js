import React, {Component} from 'react';

import {View,Text,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class PushNotifications extends Component{
render(){
    return(
<View style={styles.container}>

<Ionicons name="md-checkmark-circle" size={32} color="green" />

</View>

     );
   }
 }
 const styles = StyleSheet.create({

    container :{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#fff'
    },
})