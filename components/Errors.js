import React from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';
 
export default function Errors({error}){
   
    return(
            <View style={{height:40,}}>{!!error && error.graphQLErrors.map( ({message}) =>(<Text style={{color:'red',fontSize:15}}>
                {message}
                 
            </Text>))}</View>
        )

}
