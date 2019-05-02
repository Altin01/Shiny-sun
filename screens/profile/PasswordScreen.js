import React ,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class PasswordScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <View style={styles.container}>  
               <Text>
                   Pasword
               </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center'
    },

})