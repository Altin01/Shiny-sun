import React,{Component}  from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

export default class Loading extends Component {
    render(){
        return(
            <View style={{height:40,alignItems:'center',justifyContent:'center'}}>
                  <ActivityIndicator />
            </View>
        )
    }
}