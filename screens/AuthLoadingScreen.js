import React,{Component} from 'react';
import {AsyncStorage,View,ActivityIndicator,StyleSheet} from 'react-native';

export default class AuthLoadingScreen extends Component {
    constructor(props){
        super(props);
         this.loadApp();
    }
    loadApp = async()=>{
       const userToken = await AsyncStorage.getItem('userToken');
       this.props.navigation.navigate('Home');

    }
    render(){
        return(
          <View style={style.container}>
              <ActivityIndicator />
          </View>
        );
    }
}
const style = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#fff',
        justifyContent :'center',
        alignItems :'center'
    }
})