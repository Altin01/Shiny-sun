import React from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';

export default function Errors ({error}){
   return(
            <View>{!!error && error.graphQlErrors.map(({message})=>(<Text style={{color:'red',fontSize:20}}>
                {message}
            </Text>))}</View>
        )

}
