import React,{Component} from 'react';
import {AsyncStorage,View,ActivityIndicator,StyleSheet} from 'react-native';

export default class AuthLoadingScreen extends Component {
    constructor(props){
        super(props);
         this.loadApp();
    }
    loadApp = async()=>{
       const token = await AsyncStorage.getItem('@toka-dhe-dielli:token');
       if(token){
           this.props.navigation.navigate('Home');
       }else {
           this.props.navigation.navigate('Register');
       }

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