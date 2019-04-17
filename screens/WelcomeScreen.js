import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class WelcomeScreen extends Component {
    render(){
        return(
            <View style={style.container}>
                <Text>
                  Welcome Screen
                </Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    }
})