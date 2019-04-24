import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native';

export default class ProfileScreen extends Component {
    render(){
        return(
            <View style={style.container}>
               <Button
               title="Log out"
               onPress={()=>{
                   AsyncStorage.removeItem('@toka-dhe-dielli:token');
                   this.props.navigation.navigate('Register');
               }}
               />

            </View>
        )
    }
}

const style = StyleSheet.create({
    container :{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#fff'
    }
})