import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    AsyncStorage
    
} from 'react-native';
import Button from '../../components/Button';

export default class LogoutScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                  <Button name="Log out"  onPress={()=>{
                   AsyncStorage.removeItem('@toka-dhe-dielli:token');
                   this.props.navigation.navigate('Register');
               }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent :'center',
        alignItems:'center'

    }
})