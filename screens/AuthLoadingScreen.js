import React,{Component} from 'react';
import {AsyncStorage,View,ActivityIndicator,StyleSheet} from 'react-native';

export default class AuthLoadingScreen extends Component {
    constructor(props){
        super(props);
         this.loadApp();
    }
    loadApp = async()=>{
       const userToken = await AsyncStorage.getItem('userToken');
       this.props.navigation.navigate(userToken ? 'Home':'Register');

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
        backgroundColor:'#fff',
        justifyContent :'center',
        alignItems :'center'
    }
})